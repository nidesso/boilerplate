import { ErrorMessage } from "@hookform/error-message";
import classNames from "classnames";
import { DeepMap, FieldError, useController, UseControllerProps } from "react-hook-form";
import { getValue } from "../../../helpers/utils/array.util";
import ListBox, { ListBoxProps } from "../ListBox";

type FormInputProps<T, TFormValues extends Record<string, unknown>> = {
    errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & ListBoxProps<T> & UseControllerProps<TFormValues>;

function FormListBox<T, TFormValues extends Record<string, unknown>>(props: FormInputProps<T, TFormValues>) {
    const {
        field: { value, onChange }
    } = useController<TFormValues>({ ...props, defaultValue: props.defaultValue as any });

    const errorMessages = getValue(props.errors, props.name, undefined);
    const hasError = !!(props.errors && errorMessages);

    return (
        <div>
            <ListBox
                {...props}
                value={value as T}
                valueChanged={onChange}
                className={classNames({
                    'transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 border border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600':
                        hasError,
                }, props.className)}
            ></ListBox>
            {props.errors && <ErrorMessage
                errors={props.errors}
                name={props.name as any}
                render={({ message }) => (
                    <p className="mt-1 text-sm text-left block text-red-600">
                        {message}
                    </p>
                )}></ErrorMessage>}
        </div>
    );
}

export default FormListBox;