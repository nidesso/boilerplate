import axios from 'axios';
import { Schedule } from '../../models/schedule/schedule';
import { School } from '../../models/school/school';
import { Teacher } from '../../models/teacher/teacher';
import { CreateVacancy, Vacancy } from '../../models/vacancy/vacancy';

export const client = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
});

// const schedules: Schedule[] = [
//     {
//         id: '0',
//         teacherId: '1',
//         description: 'Severin schedule',
//         duration: [
//             { start: new Date("2023-01-06T08:00:00+0000"), end: new Date("2023-01-06T09:00:00+0000") },
//             { start: new Date("2023-01-06T09:10:00+0000"), end: new Date("2023-01-06T09:55:00+0000") },
//             { start: new Date("2023-01-06T10:15:00+0000"), end: new Date("2023-01-06T11:00:00+0000") },
//             { start: new Date("2023-01-06T11:10:00+0000"), end: new Date("2023-01-06T11:55:00+0000") },
//             { start: new Date("2023-01-06T13:30:00+0000"), end: new Date("2023-01-06T14:15:00+0000") },
//             { start: new Date("2023-01-06T14:25:00+0000"), end: new Date("2023-01-06T15:10:00+0000") },
//             { start: new Date("2023-01-06T15:30:00+0000"), end: new Date("2023-01-06T16:15:00+0000") },
//         ],
//         lessons: [
//             { dayCode: 0, durationCode: 0, name: 'Fach' },
//             { dayCode: 0, durationCode: 1, name: 'Fach' },
//             { dayCode: 0, durationCode: 2, name: 'Fach' },
//             { dayCode: 1, durationCode: 4, name: 'Fach' },
//             { dayCode: 1, durationCode: 5, name: 'Fach' },
//             { dayCode: 1, durationCode: 6, name: 'Fach' },
//             { dayCode: 2, durationCode: 0, name: 'Fach' },
//             { dayCode: 2, durationCode: 1, name: 'Fach' },
//             { dayCode: 2, durationCode: 5, name: 'Fach' },
//             { dayCode: 2, durationCode: 6, name: 'Fach' },
//             { dayCode: 4, durationCode: 2, name: 'Fach' },
//             { dayCode: 4, durationCode: 3, name: 'Fach' },
//             { dayCode: 4, durationCode: 4, name: 'Fach' },
//             { dayCode: 4, durationCode: 5, name: 'Fach' },
//         ]
//     },
//     {
//         id: '1',
//         teacherId: '2',
//         description: 'Jan schedule',
//         duration: [
//             { start: "0815", end: "0900" },
//             { start: "0910", end: "0955" },
//             { start: "1015", end: "1100" },
//             { start: "1110", end: "1155" },
//             { start: "1330", end: "1415" },
//             { start: "1425", end: "1510" },
//             { start: "1530", end: "1615" },
//         ],
//         lessons: [
//             { dayCode: 0, durationCode: 0, name: 'Fach' },
//             { dayCode: 0, durationCode: 1, name: 'Fach' },
//             { dayCode: 0, durationCode: 2, name: 'Fach' },
//             { dayCode: 1, durationCode: 4, name: 'Fach' },
//             { dayCode: 1, durationCode: 5, name: 'Fach' },
//             { dayCode: 1, durationCode: 6, name: 'Fach' },
//             { dayCode: 2, durationCode: 0, name: 'Fach' },
//             { dayCode: 2, durationCode: 1, name: 'Fach' },
//             { dayCode: 2, durationCode: 5, name: 'Fach' },
//             { dayCode: 2, durationCode: 6, name: 'Fach' },
//             { dayCode: 4, durationCode: 2, name: 'Fach' },
//             { dayCode: 4, durationCode: 3, name: 'Fach' },
//             { dayCode: 4, durationCode: 4, name: 'Fach' },
//             { dayCode: 4, durationCode: 5, name: 'Fach' },
//         ]
//     },
//     {
//         id: '2',
//         teacherId: '3',
//         description: 'Manuel schedule',
//         duration: [
//             { start: "0815", end: "0900" },
//             { start: "0910", end: "0955" },
//             { start: "1015", end: "1100" },
//             { start: "1110", end: "1155" },
//             { start: "1330", end: "1415" },
//             { start: "1425", end: "1510" },
//             { start: "1530", end: "1615" },
//         ],
//         lessons: [
//             { dayCode: 0, durationCode: 0, name: 'Fach' },
//             { dayCode: 0, durationCode: 4, name: 'Fach' },
//             { dayCode: 0, durationCode: 5, name: 'Fach' },
//             { dayCode: 1, durationCode: 4, name: 'Fach' },
//             { dayCode: 1, durationCode: 5, name: 'Fach' },
//             { dayCode: 1, durationCode: 6, name: 'Fach' },
//             { dayCode: 2, durationCode: 0, name: 'Fach' },
//             { dayCode: 2, durationCode: 1, name: 'Fach' },
//             { dayCode: 2, durationCode: 5, name: 'Fach' },
//             { dayCode: 2, durationCode: 6, name: 'Fach' },
//             { dayCode: 3, durationCode: 5, name: 'Fach' },
//             { dayCode: 3, durationCode: 6, name: 'Fach' },
//             { dayCode: 4, durationCode: 2, name: 'Fach' },
//             { dayCode: 4, durationCode: 3, name: 'Fach' },
//             { dayCode: 4, durationCode: 4, name: 'Fach' },
//             { dayCode: 4, durationCode: 5, name: 'Fach' },
//         ]
//     }
// ];
// const vacancies: Vacancy[] = [];
// const schools: School[] = [
//     {
//         id: '0',
//         name: 'Dorf',
//         adresses: []
//     }
// ];
// const teachers: Teacher[] = [
//     {
//         id: '1',
//         name: 'Severin',
//         lastname: 'Haas'
//     },
//     {
//         id: '2',
//         name: 'Jan',
//         lastname: 'Kuonen'
//     },
//     {
//         id: '3',
//         name: 'Manuel',
//         lastname: 'Käch'
//     }
// ];

class Api {
    doApiCall<T>(call: () => Promise<T>, setIsLoading: (value: boolean) => void = (_) => { }): Promise<T> {
        setIsLoading(true);
        return call()
            .catch(e => { throw e })
            .finally(() => setIsLoading(false));
    }

    createVacancy(vacancy: CreateVacancy) {
        // vacancies.push({
        //     id: vacancies.length.toString(),
        //     absentTeacher: teachers.find(teacher => teacher.id === vacancy.absentTeacherId)!,
        //     appliedTeachers: [],
        //     startDate: vacancy.startDate,
        //     endDate: vacancy.endDate,
        //     lessons: vacancy.lessons,
        //     school: schools[0],
        //     description: vacancy.description,
        //     schedule: schedules.find(schedule => schedule.id === vacancy.scheduleId)!
        // });
        // return Promise.resolve();
        return client.post('vacancy', vacancy)
            .then(r => r.data);
    }

    getVacancies() {
        return client.get<Vacancy[]>('vacancy')
            .then(r => r.data);
        // return Promise.resolve(vacancies);
    }

    getSchoolVacancies(schoolId: string) {
        return client.get<Vacancy[]>(`school/${schoolId}/vacancy/`)
            .then(r => r.data);
    }

    getTeachersOfSchool(id: string): Promise<Teacher[]> {
        return client.get<Teacher[]>(`school/${id}/teacher/`)
            .then(r => r.data);
        // return Promise.resolve(teachers);
    }

    getSchools() {
        return client.get<School[]>(`school`)
            .then(r => r.data);
    }

    getSchool(id: string) {
        return client.get<School[]>(`school/${id}`)
            .then(r => r.data);
        // return Promise.resolve(schools.find(school => school.id === id));
    }

    getSchedules(schoolId: string) {
        return client.get<Schedule[]>(`school/${schoolId}/schedule/`)
            .then(r => r.data);
        // return Promise.resolve(schedules);
    }

    getSchedule(schoolId: string, teacherId: string) {
        return client.get<Schedule[]>(`school/${schoolId}/schedule/`)
            .then(r => r.data)
            .then(data => data.find(s => s.teacherId === teacherId));
        // return Promise.resolve(schedules.find(schedule => schedule.teacherId === teacherId))
    }

    fact() {
        return axios.get('https://catfact.ninja/fact')
            .then(r => r.data.fact);
    }
}

const api = new Api();

export default api;