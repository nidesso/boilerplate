import { useForm } from "react-hook-form";
import Button from "../../components/ui-lib/Button";
import { FormInput } from "../../components/ui-lib/form/FormInput";

type VacancyFormProps = {
    onSubmit: (data: VacancyFormFields) => void;
    actions?: JSX.Element[];
    vacancy?: VacancyFormFields
};

export type VacancyFormFields = {
    title: string;
    description: string;
};

function VacancyForm({
    onSubmit,
    actions,
    vacancy
}: VacancyFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<VacancyFormFields>();

    const _onSubmit = handleSubmit((data) => {
        onSubmit(data);
    });

    return (
        <>
            <form onSubmit={_onSubmit}>
                <FormInput
                    className="mb-2"
                    id="title"
                    type="text"
                    name="title"
                    label="Titel"
                    placeholder="Titel"
                    register={register}
                    defaultValue={vacancy?.title}
                    rules={{
                        required: 'Sie müssen einen Titel hinzufügen.'
                    }}
                    errors={errors}
                />
                <FormInput
                    id="description"
                    type="text"
                    name="description"
                    label="Beschreibung"
                    placeholder="Beschreibung"
                    register={register}
                    defaultValue={vacancy?.description}
                    rules={{
                        required: 'Sie müssen eine Beschreibung hinzufügen.'
                    }}
                    errors={errors}
                />
                <Button className="mt-4" theme="primary" onClick={_onSubmit}>Speichern</Button>
                {actions}
            </form>
        </>
    )
}

export default VacancyForm;