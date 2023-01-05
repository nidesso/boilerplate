import { duration } from "../schedule/duration";
import { createVacencySchedule } from "./createVacencySchedule"

export type createVacency = {
    schedule: createVacencySchedule;
    duration: duration;
}