import { School } from "../school/school"
import { Teacher } from "../teacher/teacher";

export type Vacancy = {
    school: School;
    teachers: Teacher[];
    id: number;
}