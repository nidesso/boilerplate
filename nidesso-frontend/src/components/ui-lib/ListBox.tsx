import { Listbox, Transition } from "@headlessui/react";
import { Fragment, Key, ReactNode } from "react";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

interface ListBoxProps<T> {
    className?: string;
    value?: T;
    valueChanged?: (value: T) => void;
    values: T[];
    valueTemplate?: JSX.Element;
    itemTemplate?: JSX.Element;
    itemDisabled?: (item: T) => boolean;
    valueIdentifier?: (item: T) => string | number;
    valueKey?: (item: T) => string | number;
}

function ListBox<T>(props: ListBoxProps<T>) {
    return (
        <Listbox as="div" className="w-full relative" value={props.value} onChange={props.valueChanged}>
            <Listbox.Button className="bg-white border-solid border-gray-100 border px-4 py-2 rounded-lg relative w-full">
                <span className="block truncate mr-4 text-gray-900 text-start">{(props.valueKey ? props.valueKey(props.value!) : props.value) as ReactNode}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </span>
            </Listbox.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {props.values.map((value) => (
                        <Listbox.Option
                            key={(props.valueIdentifier ? props.valueIdentifier(value) : value) as Key}
                            value={value}
                            disabled={props.itemDisabled ? props.itemDisabled(value) : false}
                            className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 ${active ? 'bg-th-primary-100' : ''}`}
                        >
                            {({ selected }) => (
                                <Fragment>
                                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                        {(props.valueKey ? props.valueKey(value) : value) as ReactNode}
                                    </span>
                                    {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-th-primary-900">
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                    ) : null}
                                </Fragment>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    );
}

export default ListBox;