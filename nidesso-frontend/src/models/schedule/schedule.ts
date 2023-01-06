import { Duration } from "./duration";
import { ScheduleLesson } from "./lesson";

export type Schedule = {
    id: string;
    duration: Duration[];
    lessons: ScheduleLesson[];
    teacherId?: string;
    description?: string;
}