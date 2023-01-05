import { duration } from "./duration";
import { lesson } from "./lesson";

export type schedule = {
    duration: duration[];
    lessons: lesson[][];
}