import Button from "../../components/ui-lib/Button";
import { ComponentStyles } from "../../helpers/constants/styles";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ListBox from "../../components/ui-lib/ListBox";
import { TestForm } from "./TestForm";
import { Input } from "../../components/ui-lib/Input";

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
            <div>
                <Menu as="div" className={ComponentStyles['primary'] + "relative inline-block text-left"}>
                    <Menu.Button>Menu</Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute mt-3 text-gray-900 -ml-5 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <a className={`${active && 'bg-blue-500'}`}
                                        href="/">
                                        Account settings
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <Menu as="div" className="relative inline-block text-left ml-4">
                    <Menu.Button>Menu</Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <a className={`${active && 'bg-blue-500'}`}
                                        href="/">
                                        Account settings
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            <hr className="my-4 -mx-4"></hr>
            <h1 className="text-3xl font-bold my-4">Textbox</h1>
            <Input type="text" id="test" name="test" label="Test" placeholder="Write your text here..."></Input>
            <hr className="my-4 -mx-4"></hr>
            <h1 className="text-3xl font-bold my-4">Listbox</h1>
            <div className="w-72">
                <ListBox
                    values={people}
                    value={selectedPerson}
                    valueChanged={setSelectedPerson}
                    itemDisabled={(item) => item.unavailable}
                    valueIdentifier={(value) => value.id}
                    valueKey={(value) => value.name}
                ></ListBox>
            </div>
            <hr className="my-4 -mx-4"></hr>
            <h1 className="text-3xl font-bold my-4">Form</h1>
            <TestForm></TestForm>
        </div>
    );
}

export default Playground;