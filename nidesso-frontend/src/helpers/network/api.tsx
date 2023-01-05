import axios from 'axios';
import { VacancyFormFields } from '../../features/school/VacancyForm';
import { teacher } from '../../models/teacher/teacher';

export const client = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
});

const vacancies: VacancyFormFields[] = [
];

const teachers: teacher[] = [
    {
        id: 1,
        username: 'Severin Haas'
    },
    {
        id: 2,
        username: 'Jan Kuonen'
    },
    {
        id: 3,
        username: 'Manuel Käch'
    }
];

class Api {
    doApiCall<T>(call: () => Promise<T>, setIsLoading: (value: boolean) => void = (_) => { }): Promise<T> {
        setIsLoading(true);
        return call()
            .catch(e => { throw e })
            .finally(() => setIsLoading(false));
    }

    createVacancy(vacancy: VacancyFormFields) {
        vacancies.push(vacancy);
        return Promise.resolve();
        // return client.post('vacancy', vacancy);
    }

    getVacancies() {
        // return client.get<vacancy[]>('vacancy')
        //     .then(r => r.data);
        return Promise.resolve(vacancies);
    }

    getTeachersOfSchool(id: number): Promise<teacher[]> {
        // return client.get<teacher>(`school/${id}/teacher/`)
        //     .then(r => [r.data]);
        return Promise.resolve(teachers);
    }

    fact() {
        return axios.get('https://catfact.ninja/fact')
            .then(r => r.data.fact);
    }
}

const api = new Api();

export default api;