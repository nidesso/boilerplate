import { Input, InputProps } from "../Input";
import { DeepMap, FieldError, FieldPath, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { getValue } from "../../../helpers/utils/array.util";
import { ErrorMessage } from "@hookform/error-message";
import classNames from "classnames";

export type FormInputProps<TFormValues extends Record<string, unknown>> = {
    name: FieldPath<TFormValues>;
    rules?: RegisterOptions;
    register?: UseFormRegister<TFormValues>;
    errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<InputProps, 'ref' | 'name'>;

export const FormInput = <TFormValues extends Record<string, unknown>>({
    className,
    name,
    register,
    rules,
    errors,
    ...props
}: FormInputProps<TFormValues>): JSX.Element => {
    const errorMessages = getValue(errors, name, undefined);
    const hasError = !!(errors && errorMessages);

    return (
        <div className={className} aria-live="polite">
            <Input
                name={name}
                aria-invalid={hasError}
                className={classNames({
                    'transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 border border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600':
                        hasError,
                })}
                {...props}
                {...(register && register(name, rules))} />
            {errors && <ErrorMessage
                errors={errors}
                name={name as any}
                render={({ message }) => (
                    <p className="mt-1 text-sm text-left block text-red-600">
                        {message}
                    </p>
                )}></ErrorMessage>}
        </div>
    );
};