import classNames from "classnames";

interface InputProps {
    type?: string;
    className?: string;
    placeholder?: string;
}

function Input(props: InputProps) {
    return (
        <input type={props.type ?? 'text'}
            className={classNames(
                "bg-white border-solid border-gray-100 border px-4 py-2 rounded-lg relative w-full focus:outline-none focus:ring-2 focus:ring-th-primary-100",
                props.className
            )}
            placeholder={props.placeholder}></input>
    )
}

export default Input;