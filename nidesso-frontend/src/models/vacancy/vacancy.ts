import { VacancyLesson } from "../schedule/lesson";
import { Schedule } from "../schedule/schedule";
import { School } from "../school/school";
import { Teacher } from "../teacher/teacher";

export type Vacancy = {
    school: School;
    absentTeacher: Teacher;
    appliedTeachers: Teacher[];
    schedule: Schedule;
    lessons: VacancyLesson[];
    description?: string;
    startDate: Date;
    endDate: Date;
    id: string;
}

export type CreateVacancy = {
    absentTeacherId: string;
    scheduleId: string;
    lessons: VacancyLesson[];
    description?: string;
    startDate: Date;
    endDate: Date;
}