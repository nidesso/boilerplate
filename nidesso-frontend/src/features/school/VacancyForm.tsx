import { useCallback, useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Scheduler from "../../components/Scheduler";
import Button from "../../components/ui-lib/Button";
import { FormInput } from "../../components/ui-lib/form/FormInput";
import FormListBox from "../../components/ui-lib/form/FormListBox";
import api from "../../helpers/network/api";
import { generateSchedule } from "../../helpers/utils/calendar.util";
import { SchedulerLesson, VacancyLesson } from "../../models/schedule/Lesson";
import { Schedule } from "../../models/schedule/Schedule";
import { Teacher } from "../../models/teacher/Teacher";

type VacancyFormProps = {
    onSubmit: (data: VacancyFormFields) => void;
    actions?: JSX.Element[];
    vacancy?: VacancyFormFields
};

export type VacancyFormFields = {
    teacher: Teacher;
    start: Date;
    end: Date;
    description: string;
    lessons: VacancyLesson[]
};

function VacancyForm({
    onSubmit,
    actions,
    vacancy
}: VacancyFormProps) {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<VacancyFormFields>();

    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [lessons, setLessons] = useState<SchedulerLesson[][]>([]);
    const [schedule, setSchedule] = useState<Schedule>();
    const dates = useWatch({ name: ['start', 'end'], control });
    const selectedTeacher = useWatch({ name: 'teacher', control });

    const setValueCallback = useCallback(
        (values: SchedulerLesson[][]) => {
            setLessons(values)
        }, [],
    );

    const _onSubmit = handleSubmit((data) => {
        // check if at least one lesson is selected
        if (lessons.length === 0) {
            return;
        }
        onSubmit({
            ...data,
            lessons: lessons.flatMap(l => l).filter(l => l.isActive)
        });
    });

    useEffect(() => {
        api.doApiCall(() => api.getTeachersOfSchool(0))
            .then(setTeachers);
    }, []);

    useEffect(() => {
        if (dates[0] && dates[1] && schedule) {
            setLessons(generateSchedule(schedule, new Date(dates[0]), new Date(dates[1])));
        } else {
            setLessons([]);
        }
    }, [dates, schedule]);

    useEffect(() => {
        if (!!selectedTeacher) {
            api.doApiCall(() => api.getSchedule(0, selectedTeacher?.id))
                .then(setSchedule)
        }
    }, [selectedTeacher])

    return (
        <>
            <form onSubmit={_onSubmit}>
                <FormListBox
                    name="teacher"
                    control={control}
                    values={teachers}
                    itemDisabled={(_) => false}
                    valueKey={t => t.name}
                    valueIdentifier={t => t.id}
                    errors={errors as any}
                    rules={{
                        required: 'Sie müssen eine Lehrperson selektieren.'
                    }}
                    placeholder="Kranke Lehrperson wählen"
                ></FormListBox>
                <div className="my-2 grid md:grid-cols-2">
                    <FormInput
                        name="start"
                        label="Von"
                        id="start"
                        register={register}
                        className="mr-2"
                        type="date"
                        rules={{
                            required: 'Sie müssen ein Datum selektieren.'
                        }}
                        errors={errors as any}
                    ></FormInput>
                    <FormInput
                        label="Bis"
                        id="end"
                        name="end"
                        register={register}
                        type="date"
                        rules={{
                            required: 'Sie müssen ein Datum selektieren.'
                        }}
                        errors={errors as any}
                    ></FormInput>
                </div>
                <FormInput
                    label="Besondere Hinweise"
                    id="description"
                    name="description"
                    register={register}
                    errors={errors as any}></FormInput>
                {lessons?.length > 0 &&
                    <Scheduler
                        className="mt-4"
                        lessons={lessons}
                        startDate={new Date(dates[0])}
                        setValue={setValueCallback}
                    ></Scheduler>}
                <Button className="mt-4" theme="primary" onClick={_onSubmit}>Speichern</Button>
                {actions}
            </form>
        </>
    )
}

export default VacancyForm;