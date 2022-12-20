import { Listbox, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Button from "../../components/ui-lib/Button";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import ListBox from "../../components/ui-lib/ListBox";

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

const elements = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
];

function Playground() {
    elements.find(a => a);

    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return (
        <div>
            <h1 className="text-3xl font-bold my-4">Buttons</h1>
            <div className="grid grid-cols-6 gap-2">
                <Button theme="primary">Primary</Button>
                <Button theme="secondary">Secondary</Button>
                <Button theme="accent">Accent</Button>
                <Button theme="success">Success</Button>
                <Button theme="warning">Warning</Button>
                <Button theme="error">Error</Button>
            </div>
            <hr className="my-4 -mx-4"></hr>
            <h1 className="text-3xl font-bold my-4">Menu</h1>
            <Menu>

            </Menu>
            <hr className="my-4 -mx-4"></hr>
            <h1 className="text-3xl font-bold my-4">Listbox</h1>
            <div className="w-72">
                <Listbox as="div" className="w-full relative" value={selectedPerson} onChange={setSelectedPerson}>
                    <Listbox.Button className="bg-white border-solid border-gray-100 border px-4 py-2 rounded-lg relative w-full">
                        <span className="block truncate mr-4 text-gray-900 text-start">{selectedPerson.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {people.map((person) => (
                                <Listbox.Option
                                    key={person.id}
                                    value={person}
                                    disabled={person.unavailable}
                                    className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 ${active ? 'bg-th-primary-100' : ''}`}
                                >
                                    {({ selected }) => (
                                        <Fragment>
                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                {person.name}
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
                <ListBox
                    values={people}
                    value={selectedPerson}
                    valueChanged={setSelectedPerson}
                    itemDisabled={(item) => item.unavailable}
                    key="id"
                    valueKey="name"
                ></ListBox>
            </div>

        </div>
    );
}

export default Playground;