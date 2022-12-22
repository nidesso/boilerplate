import classNames from "classnames";
import { useForm } from "react-hook-form";
import { FormInput } from "../../components/ui-lib/form/FormInput";
import FormListBox from "../../components/ui-lib/form/FormListBox";
import { ComponentStyles } from "../../helpers/constants/styles";

export type TestFormFields = {
    firstName: string;
    gender: string;
    password: string;
};

const genders = [
    'Male',
    'Female'
]

export const TestForm = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TestFormFields>();

    const onSubmit = handleSubmit((data) => {
        console.log('submitting...');
        console.log(data);
    });

    return (
        <form onSubmit={onSubmit}>
            <FormInput
                id="firstName"
                type="text"
                name="firstName"
                label="First Name"
                placeholder="First Name"
                register={register}
                rules={{
                    required: 'You must enter your firstname.'
                }}
                errors={errors}
            />
            <FormListBox
                name="gender"
                control={control}
                values={genders}
                rules={{
                    required: 'You must select a value.'
                }}
                itemDisabled={(_) => false}
                errors={errors}
                className="mt-2"></FormListBox>
            <FormInput
                id="password"
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                register={register}
                rules={{
                    required: 'You must enter a password.'
                }}
                errors={errors}
                className="mt-2"
            />
            <button type="submit" className={classNames(
                ComponentStyles['primary'],
                'mt-2'
            )}>
                Submit
            </button>
        </form>
    );
};