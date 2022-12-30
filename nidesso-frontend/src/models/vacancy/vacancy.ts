import { school } from "../school/school"
import { teacher } from "../teacher/teacher";

export type vacancy = {
    school: school;
    teachers: teacher[];
    id: number;
}