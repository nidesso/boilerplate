import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Scheduler from "../../components/Scheduler";
import Button from "../../components/ui-lib/Button";
import { FormInput } from "../../components/ui-lib/form/FormInput";
import FormListBox from "../../components/ui-lib/form/FormListBox";
import api from "../../helpers/network/api";
import { schedule } from "../../models/schedule/schedule";
import { teacher } from "../../models/teacher/teacher";

type VacancyFormProps = {
    onSubmit: (data: VacancyFormFields) => void;
    actions?: JSX.Element[];
    vacancy?: VacancyFormFields
};

export type VacancyFormFields = {
    teacher: teacher;
    start: Date;
    end: Date;
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

    const [teachers, setTeachers] = useState<teacher[]>([]);
    const [selectedTeacher, setSelectedTeacher] = useState<teacher>();

    const schedule: schedule = {
        duration: [
            { start: "0815", end: "0900" },
            { start: "0910", end: "0955" },
            { start: "1015", end: "1100" },
            { start: "1110", end: "1155" },
            { start: "1330", end: "1415" },
            { start: "1425", end: "1510" },
            { start: "1530", end: "1615" },
        ],
        lessons: [
            [
                { active: true, name: 'Fach' },
                { active: true, name: 'Fach' },
                { active: true, name: 'Fach' },
                { active: true, name: 'Fach' },
                { active: false, name: 'Fach' },
                { active: false, name: 'Fach' },
                { active: false, name: 'Fach' },
            ],
            [
                { active: false, name: 'Fach' },
                { active: true, name: 'Fach' },
                { active: false, name: 'Fach' },
                { active: false, name: 'Fach' },
                { active: true, name: 'Fach' },
                { active: true, name: 'Fach' },
                { active: true, name: 'Fach' },
            ],
            [
                { active: false, name: 'Fach' },
                { active: true, name: 'Fach' },
                { active: true, name: 'Fach' },
                { active: true, name: 'Fach' },
                { active: true, name: 'Fach' },
                { active: true, name: 'Fach' },
                { active: false, name: 'Fach' },
            ],
            [
                { active: false, name: 'Fach' },
                { active: false, name: 'Fach' },
                { active: false, name: 'Fach' },
                { active: false, name: 'Fach' },
                { active: false, name: 'Fach' },
                { active: false, name: 'Fach' },
                { active: false, name: 'Fach' },
            ],
            [
                { active: true, name: 'Fach' },
                { active: true, name: 'Fach' },
                { active: true, name: 'Fach' },
                { active: true, name: 'Fach' },
                { active: false, name: 'Fach' },
                { active: false, name: 'Fach' },
                { active: false, name: 'Fach' },
            ],
        ]
    }

    const _onSubmit = handleSubmit((data) => {
        onSubmit(data);
    });

    useEffect(() => {
        api.doApiCall(() => api.getTeachersOfSchool(0))
            .then(setTeachers)
    }, []);

    useEffect(() => {

    }, [selectedTeacher])

    return (
        <>
            <form onSubmit={_onSubmit}>
                <FormListBox
                    name="teacher"
                    control={control}
                    values={teachers}
                    value={selectedTeacher}
                    valueChanged={setSelectedTeacher}
                    itemDisabled={(_) => false}
                    valueKey={t => t.id}
                    valueIdentifier={t => t.id}
                    errors={errors as any}
                    rules={{
                        required: 'Sie müssen eine Lehrperson selektieren.'
                    }}
                    placeholder="Kranke Lehrperson wählen"
                ></FormListBox>
                <div className="mt-2 grid md:grid-cols-2">
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
                <Scheduler className="mt-4" schedule={schedule}></Scheduler>
                <Button className="mt-4" theme="primary" onClick={_onSubmit}>Speichern</Button>
                {actions}
            </form>
        </>
    )
}

export default VacancyForm;