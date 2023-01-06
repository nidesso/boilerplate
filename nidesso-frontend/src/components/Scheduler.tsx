import { CheckIcon, PlusIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { forwardRef } from "react";
import { mod } from "../helpers/utils/math.util";
import { SchedulerLesson } from "../models/schedule/lesson";

export type SchedulerInputProps = {
    lessons: SchedulerLesson[][];
    startDate: Date;
    className?: string;
    setValue: (lessons: SchedulerLesson[][]) => void
}

const weekdays = [
    { id: 0, name: 'Montag', shortName: 'Mo' },
    { id: 1, name: 'Dienstag', shortName: 'Di' },
    { id: 2, name: 'Mittwoch', shortName: 'Mi' },
    { id: 3, name: 'Donnerstag', shortName: 'Do' },
    { id: 4, name: 'Freitag', shortName: 'Fr' },
]

const Scheduler = forwardRef(({
    startDate,
    lessons,
    className,
    setValue,
}: SchedulerInputProps, ref) => {

    const toggleActive = (lesson: SchedulerLesson, day: number) => {
        const newLessons = [...lessons];
        const idx = lessons[day].indexOf(lesson);
        newLessons[day][idx] = { ...lesson, isActive: !lesson.isActive };
        setValue(newLessons);
    }

    const getWeekDay = (idx: number) => mod(startDate.getDay() + idx - 1, 5);

    return (
        <>
            <div className={classNames("flex overflow-auto", className)} ref={ref as any}>
                {
                    lessons.map((dayLessons, day) => (
                        <>
                            <div key={day} className="flex flex-col flex-grow flex-shrink-1 basis-0">
                                <div key={`${day}_weekday`} className="self-center">{weekdays[getWeekDay(day)].shortName}</div>
                                {dayLessons.map((dayLesson, durationId) => (
                                    dayLesson.isActive ?
                                        <div
                                            key={`${day}_${durationId}`}
                                            className={classNames(
                                                "flex min-w-[4rem] bg-th-primary-900 h-8 rounded-md cursor-pointer hover:bg-th-primary-800",
                                                lessons.length > day + 1 && getWeekDay(day) !== 4 && 'mr-1',
                                                dayLessons.length > durationId + 1 && 'mb-1')}
                                            onClick={() => toggleActive(dayLesson, day)}
                                        >
                                            <CheckIcon className="h-5 w-5 text-white m-auto" aria-hidden="true" />
                                        </div> :
                                        <div
                                            key={`${day}_${durationId}`}
                                            className={classNames(
                                                "flex min-w-[4rem] bg-gray-100 h-8 rounded-md hover:bg-th-primary-100",
                                                dayLesson.canActivate ? 'cursor-pointer' : 'pointer-events-none opacity-50',
                                                lessons.length > day + 1 && getWeekDay(day) !== 4 && 'mr-1',
                                                dayLessons.length > durationId + 1 && 'mb-1')}
                                            onClick={() => toggleActive(dayLesson, day)}
                                        >
                                            {dayLesson.canActivate && <PlusIcon className="h-5 w-5 text-th-primary-900 m-auto" aria-hidden="true"></PlusIcon>}
                                        </div>
                                ))}
                            </div>
                            {lessons.length > day + 1 && getWeekDay(day) === 4 && <div key={`${day}_weekend`} className="w-1 bg-th-primary-900 mx-2 rounded-full flex-grow-0 flex-shrink-0 basis-auto"></div>}
                        </>
                    ))
                }
            </div>
            {lessons.every(l => l.every(ll => !ll.isActive)) && <div className="text-sm text-red-600">Mindestens eine Lektion muss selektiert sein</div>}
        </>
    );
})

export default Scheduler;