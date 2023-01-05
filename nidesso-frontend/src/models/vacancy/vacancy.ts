import { VacancyLesson } from "../schedule/Lesson";
import { Schedule } from "../schedule/Schedule";
import { School } from "../school/School";
import { Teacher } from "../teacher/Teacher";

export type Vacancy = {
    school: School;
    absentTeacher: Teacher;
    appliedTeachers: Teacher[];
    schedule: Schedule;
    lessons: VacancyLesson[];
    description?: string;
    startDate: Date;
    endDate: Date;
    id: number;
}

export type CreateVacancy = {
    absentTeacherId: number;
    scheduleId: number;
    lessons: VacancyLesson[];
    description?: string;
    startDate: Date;
    endDate: Date;
}