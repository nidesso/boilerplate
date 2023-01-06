import { Duration } from "../schedule/duration";
import { VacancyLesson } from "../schedule/lesson";
import { Schedule } from "../schedule/schedule";
import { Teacher } from "../teacher/teacher";

export type Vacancy = {
    schoolId: string;
    absentTeacher: Teacher;
    appliedTeachers: Teacher[];
    schedule: Schedule;
    lessons: VacancyLesson[];
    description?: string;
    duration: Duration;
    id: string;
}

export type CreateVacancy = {
    absentTeacherId: string;
    scheduleId: string;
    lessons: VacancyLesson[];
    description?: string;
    duration: Duration;
}