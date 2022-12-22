import classNames from "classnames";
import { useForm } from "react-hook-form";
import { FormInput } from "../../components/ui-lib/FormInput";
import { ComponentStyles } from "../../helpers/constants/styles";

export type TestFormFields = {
    firstName: string;
    password: string;
};

export const TestForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TestFormFields>();

    const onSubmit = handleSubmit((data) => {
        console.log('submitting...');
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