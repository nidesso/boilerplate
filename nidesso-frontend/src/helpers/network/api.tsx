import axios from 'axios';
import { Schedule } from '../../models/schedule/Schedule';
import { School } from '../../models/school/School';
import { Teacher } from '../../models/teacher/Teacher';
import { CreateVacancy, Vacancy } from '../../models/vacancy/Vacancy';

export const client = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
});

const schedules: Schedule[] = [
    {
        id: 0,
        teacherId: 1,
        description: 'Severin schedule',
        duration: [
            { start: "0815", end: "0900" },
            { start: "0910", end: "0955" },
            { start: "1015", end: "1100" },
            { start: "1110", end: "1155" },
            { start: "1330", end: "1415" },
            { start: "1425", end: "1510" },
            { start: "1530", end: "1615" },
        ],
        lessons: [
            { dayCode: 0, durationCode: 0, name: 'Fach' },
            { dayCode: 0, durationCode: 1, name: 'Fach' },
            { dayCode: 0, durationCode: 2, name: 'Fach' },
            { dayCode: 1, durationCode: 4, name: 'Fach' },
            { dayCode: 1, durationCode: 5, name: 'Fach' },
            { dayCode: 1, durationCode: 6, name: 'Fach' },
            { dayCode: 2, durationCode: 0, name: 'Fach' },
            { dayCode: 2, durationCode: 1, name: 'Fach' },
            { dayCode: 2, durationCode: 5, name: 'Fach' },
            { dayCode: 2, durationCode: 6, name: 'Fach' },
            { dayCode: 4, durationCode: 2, name: 'Fach' },
            { dayCode: 4, durationCode: 3, name: 'Fach' },
            { dayCode: 4, durationCode: 4, name: 'Fach' },
            { dayCode: 4, durationCode: 5, name: 'Fach' },
        ]
    },
    {
        id: 1,
        teacherId: 2,
        description: 'Jan schedule',
        duration: [
            { start: "0815", end: "0900" },
            { start: "0910", end: "0955" },
            { start: "1015", end: "1100" },
            { start: "1110", end: "1155" },
            { start: "1330", end: "1415" },
            { start: "1425", end: "1510" },
            { start: "1530", end: "1615" },
        ],
        lessons: [
            { dayCode: 0, durationCode: 0, name: 'Fach' },
            { dayCode: 0, durationCode: 1, name: 'Fach' },
            { dayCode: 0, durationCode: 2, name: 'Fach' },
            { dayCode: 1, durationCode: 4, name: 'Fach' },
            { dayCode: 1, durationCode: 5, name: 'Fach' },
            { dayCode: 1, durationCode: 6, name: 'Fach' },
            { dayCode: 2, durationCode: 0, name: 'Fach' },
            { dayCode: 2, durationCode: 1, name: 'Fach' },
            { dayCode: 2, durationCode: 5, name: 'Fach' },
            { dayCode: 2, durationCode: 6, name: 'Fach' },
            { dayCode: 4, durationCode: 2, name: 'Fach' },
            { dayCode: 4, durationCode: 3, name: 'Fach' },
            { dayCode: 4, durationCode: 4, name: 'Fach' },
            { dayCode: 4, durationCode: 5, name: 'Fach' },
        ]
    },
    {
        id: 2,
        teacherId: 3,
        description: 'Manuel schedule',
        duration: [
            { start: "0815", end: "0900" },
            { start: "0910", end: "0955" },
            { start: "1015", end: "1100" },
            { start: "1110", end: "1155" },
            { start: "1330", end: "1415" },
            { start: "1425", end: "1510" },
            { start: "1530", end: "1615" },
        ],
        lessons: [
            { dayCode: 0, durationCode: 0, name: 'Fach' },
            { dayCode: 0, durationCode: 4, name: 'Fach' },
            { dayCode: 0, durationCode: 5, name: 'Fach' },
            { dayCode: 1, durationCode: 4, name: 'Fach' },
            { dayCode: 1, durationCode: 5, name: 'Fach' },
            { dayCode: 1, durationCode: 6, name: 'Fach' },
            { dayCode: 2, durationCode: 0, name: 'Fach' },
            { dayCode: 2, durationCode: 1, name: 'Fach' },
            { dayCode: 2, durationCode: 5, name: 'Fach' },
            { dayCode: 2, durationCode: 6, name: 'Fach' },
            { dayCode: 3, durationCode: 5, name: 'Fach' },
            { dayCode: 3, durationCode: 6, name: 'Fach' },
            { dayCode: 4, durationCode: 2, name: 'Fach' },
            { dayCode: 4, durationCode: 3, name: 'Fach' },
            { dayCode: 4, durationCode: 4, name: 'Fach' },
            { dayCode: 4, durationCode: 5, name: 'Fach' },
        ]
    }
];
const vacancies: Vacancy[] = [];
const schools: School[] = [
    {
        id: 0,
        name: 'Dorf',
        adresses: []
    }
];
const teachers: Teacher[] = [
    {
        id: 1,
        name: 'Severin',
        lastname: 'Haas'
    },
    {
        id: 2,
        name: 'Jan',
        lastname: 'Kuonen'
    },
    {
        id: 3,
        name: 'Manuel',
        lastname: 'Käch'
    }
];

class Api {
    doApiCall<T>(call: () => Promise<T>, setIsLoading: (value: boolean) => void = (_) => { }): Promise<T> {
        setIsLoading(true);
        return call()
            .catch(e => { throw e })
            .finally(() => setIsLoading(false));
    }

    createVacancy(vacancy: CreateVacancy) {
        vacancies.push({
            id: vacancies.length,
            absentTeacher: teachers.find(teacher => teacher.id === vacancy.absentTeacherId)!,
            appliedTeachers: [],
            startDate: vacancy.startDate,
            endDate: vacancy.endDate,
            lessons: vacancy.lessons,
            school: schools[0],
            description: vacancy.description,
            schedule: schedules.find(schedule => schedule.id === vacancy.scheduleId)!
        });
        return Promise.resolve();
        // return client.post('vacancy', vacancy);
    }

    getVacancies() {
        // return client.get<vacancy[]>('vacancy')
        //     .then(r => r.data);
        return Promise.resolve(vacancies);
    }

    getTeachersOfSchool(id: number): Promise<Teacher[]> {
        // return client.get<teacher>(`school/${id}/teacher/`)
        //     .then(r => [r.data]);
        return Promise.resolve(teachers);
    }

    getSchool(id: number) {
        return Promise.resolve(schools.find(school => school.id === id));
    }

    getSchedules(schoolId: number) {
        return Promise.resolve(schedules);
    }

    getSchedule(schoolId: number, teacherId: number) {
        return Promise.resolve(schedules.find(schedule => schedule.teacherId === teacherId))
    }

    fact() {
        return axios.get('https://catfact.ninja/fact')
            .then(r => r.data.fact);
    }
}

const api = new Api();

export default api;