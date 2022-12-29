import axios from 'axios';
import { VacancyFormFields } from '../../features/school/VacancyForm';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
});

const vacancies: VacancyFormFields[] = [];

class Api {

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
        return axios.get('https://catfact.ninja/fact');
    }
}

const api = new Api();

export default api;