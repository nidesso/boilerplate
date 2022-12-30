import axios from 'axios';
import { teacher } from '../../models/teacher/teacher';
import { createVacency } from '../../models/vacancy/createVacency';
import { vacancy } from '../../models/vacancy/vacancy';

export const client = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
});

// const vacancies: VacancyFormFields[] = [
//     { title: 'Ausschreibung 1', description: 'Dies ist eine Beschreibung einer Ausschreibung zum testen' },
//     { title: 'Ausschreibung 2', description: 'Dies ist eine Beschreibung einer Ausschreibung zum testen' }
// ];

class Api {
    doApiCall<T>(call: () => Promise<T>, setIsLoading: (value: boolean) => void = (_) => { }): Promise<T> {
        setIsLoading(true);
        return call()
            .catch(e => { throw e })
            .finally(() => setIsLoading(false));
    }

    createVacancy(vacancy: createVacency) {
        // vacancies.push(vacancy);
        // return Promise.resolve();
        return client.post('vacancy', vacancy);
    }

    getVacancies() {
        return client.get<vacancy[]>('vacancy')
            .then(r => r.data);
        // return Promise.resolve(vacancies);
    }

    getTeachersOfSchool(id: number): Promise<teacher[]> {
        return client.get<teacher>(`school/${id}/teacher/`)
            .then(r => [r.data]);
    }

    fact() {
        return axios.get('https://catfact.ninja/fact')
            .then(r => r.data.fact);
    }
}

const api = new Api();

export default api;