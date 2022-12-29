import axios from 'axios';
import { VacancyFormFields } from '../../features/school/VacancyForm';

export const client = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
});

const vacancies: VacancyFormFields[] = [
    { title: 'Ausschreibung 1', description: 'Dies ist eine Beschreibung einer Ausschreibung zum testen' },
    { title: 'Ausschreibung 2', description: 'Dies ist eine Beschreibung einer Ausschreibung zum testen' }
];

class Api {
    doApiCall<T>(call: () => Promise<T>, setIsLoading: (value: boolean) => void = (_) => { }) {
        setIsLoading(true);
        return call()
            .catch(console.log)
            .finally(() => setIsLoading(false));
    }

    createVacancy(vacancy: VacancyFormFields) {
        vacancies.push(vacancy);
        return Promise.resolve();
        // return client.post('vacancy', vacancy);
    }

    getVacancies() {
        // return client.get('vacancy');
        return Promise.resolve(vacancies);
    }

    fact() {
        return axios.get('https://catfact.ninja/fact')
            .then(r => r.data.fact);
    }
}

const api = new Api();

export default api;