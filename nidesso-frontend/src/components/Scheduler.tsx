import { CheckIcon, PlusIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { lesson } from "../models/schedule/lesson";
import { schedule } from "../models/schedule/schedule";

type SchedulerInputProps = {
    schedule: schedule;
    className?: string;
}

type ExtendedLesson = {
    day: number;
    order: number;
    canActivate: boolean;
} & lesson;

const weekdays = [
    { id: 0, name: 'Montag', shortName: 'Mo' },
    { id: 1, name: 'Dienstag', shortName: 'Di' },
    { id: 2, name: 'Mittwoch', shortName: 'Mi' },
    { id: 3, name: 'Donnerstag', shortName: 'Do' },
    { id: 4, name: 'Freitag', shortName: 'Fr' },
]

function Scheduler({
    schedule,
    className
}: SchedulerInputProps) {
    const [lessons, setLessons] = useState<ExtendedLesson[]>([]);

    useEffect(() => {
        const mappedLessons = schedule.lessons.reduce<ExtendedLesson[]>((pv, cv, idx) => [...pv, ...cv.map((l, order) => ({ ...l, day: idx, order, canActivate: l.active }))], []);
        setLessons(mappedLessons);
    }, [schedule])

    const toggleActive = (lesson: ExtendedLesson) => {
        const newLessons = [...lessons];
        const idx = lessons.indexOf(lesson);
        newLessons[idx] = { ...lesson, active: !lesson.active };
        setLessons(newLessons);
    }

    return (
        <div className={`grid grid-cols-5 gap-1 ${className}`}>
            {weekdays.map(wd => (
                <span className="mx-auto">{wd.shortName}</span>
            ))}
            {lessons
                .map(l => l.order)
                .filter((item, i, ar) => ar.indexOf(item) === i)
                .map(id => (
                    lessons
                        .filter(lesson => lesson.order === id)
                        .map(lesson => (
                            lesson.active ?
                                <div
                                    onClick={() => toggleActive(lesson)}
                                    className="flex bg-th-primary-900 h-8 rounded-md cursor-pointer hover:bg-th-primary-800"
                                >
                                    <CheckIcon className="h-5 w-5 text-white m-auto" aria-hidden="true" />
                                </div> :
                                <div
                                    onClick={() => toggleActive(lesson)}
                                    className={classNames("flex bg-gray-100 h-8 rounded-md hover:bg-th-primary-100", lesson.canActivate ? 'cursor-pointer' : 'pointer-events-none opacity-50')}
                                >
                                    {lesson.canActivate && <PlusIcon className="h-5 w-5 text-th-primary-900 m-auto" aria-hidden="true"></PlusIcon>}
                                </div>
                        ))
                ))}
        </div>
    );
}

export default Scheduler;