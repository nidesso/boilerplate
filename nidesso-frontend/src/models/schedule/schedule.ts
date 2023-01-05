import { Duration } from "./Duration";
import { ScheduleLesson } from "./Lesson";

export type Schedule = {
    id: number;
    duration: Duration[];
    lessons: ScheduleLesson[];
    teacherId?: number;
    description?: string;
}