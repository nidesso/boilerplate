import {
    forwardRef,
    DetailedHTMLProps,
    InputHTMLAttributes
} from 'react';
import classNames from 'classnames';

export type InputType = 'text' | 'email' | 'password';

export type InputProps = {
    id: string;
    name: string;
    label: string;
    type?: InputType;
    className?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            name,
            label,
            type = 'text',
            className = '',
            placeholder,
            ...props
        },
        ref
    ) => {
        return (
            <input
                id={id}
                ref={ref}
                name={name}
                type={type}
                aria-label={label}
                placeholder={placeholder}
                className={classNames(
                    `relative
                    border
                    border-gray-100
                    hover:border-th-primary-400
                    focus:outline-none 
                    focus:border-th-primary-100 
                    inline-flex 
                    w-full
                    px-4 py-2 
                    rounded-lg
                    leading-none 
                    transition-colors 
                    ease-in-out
                    placeholder-gray-500
                    text-gray-900
                    bg-white
                    focus:ring-th-primary-100 
                    focus:ring-2
                    focus:ring-opacity-30`,
                    className)
                }
                {...props}
            />
        );
    }
);
