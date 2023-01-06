export type ScheduleLesson = {
    id?: string;
    name?: string;
    dayCode: number;
    lessonCode: number;
}

export type VacancyLesson = {
    date: Date;
} & ScheduleLesson;

export type SchedulerLesson = {
    isActive: boolean,
    canActivate?: boolean
} & VacancyLesson;