import { Duration } from "./Duration";
import { ScheduleLesson } from "./Lesson";

export type Schedule = {
    id: string;
    duration: Duration[];
    lessons: ScheduleLesson[];
    teacherId?: string;
    description?: string;
}