import { lesson } from "../../models/schedule/lesson";
import { schedule } from "../../models/schedule/schedule";
import { mod } from "./math.util";

export type ExtendedLesson = {
    canActivate: boolean;
} & lesson;

export function calculateBusinessDays(startDate: Date, endDate: Date) {
    const vTimezoneDiff = endDate.getTimezoneOffset() - startDate.getTimezoneOffset();
    if (vTimezoneDiff !== 0) {
        // Handle daylight saving time difference between two dates.
        startDate.setMinutes(startDate.getMinutes() + vTimezoneDiff);
    }

    // Validate input
    if (endDate < startDate) return 0;

    // Calculate days between dates
    var millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    startDate.setHours(0, 0, 0, 1);  // Start just after midnight
    endDate.setHours(23, 59, 59, 999);  // End just before midnight
    var diff = endDate.getTime() - startDate.getTime();  // Milliseconds between datetime objects    
    var days = Math.ceil(diff / millisecondsPerDay);

    // Subtract two weekend days for every week in between
    var weeks = Math.floor(days / 7);
    days = days - (weeks * 2);

    // Handle special cases
    var startDay = startDate.getDay();
    var endDay = endDate.getDay();

    // Remove weekend not previously removed.   
    if (startDay - endDay > 1)
        days = days - 2;

    // Remove start day if span starts on Sunday but ends before Saturday
    if (startDay === 0 && endDay !== 6) {
        days = days - 1;
    }

    // Remove end day if span ends on Saturday but starts after Sunday
    if (endDay === 6 && startDay !== 0) {
        days = days - 1;
    }

    return days;
}

export function generateSchedule(schedule: schedule, start: Date, end: Date): ExtendedLesson[][] {
    const startDay = mod((start.getDay() - 1), 7);
    const endDay = mod((end.getDay() - 1), 7);
    const duration = calculateBusinessDays(start, end);

    if (start.getTime() > end.getTime()) {
        throw new Error('Start date has to be before the end date')
    }
    if ([5, 6].includes(startDay)) {
        throw new Error('Start date cannot be saturday or sunday');
    }
    if ([5, 6].includes(endDay)) {
        throw new Error('End date cannot be saturday or sunday');
    }

    const lessons: ExtendedLesson[][] = [];

    for (let i = startDay; i < duration + startDay; i++) {
        lessons.push(schedule.lessons[mod(i, 5)].map(l => ({ ...l, canActivate: l.active })));
    }

    return lessons;
}