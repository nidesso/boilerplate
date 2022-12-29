import Button from "../../components/ui-lib/Button";
import { ComponentStyles } from "../../helpers/constants/styles";
import { Dialog, Menu, Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ListBox from "../../components/ui-lib/ListBox";
import { TestForm } from "./TestForm";
import { Input } from "../../components/ui-lib/Input";
import UiDialog from "../../components/ui-lib/UiDialog";
import api from "../../helpers/network/api";

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
];

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
    const [isOpen, setIsOpen] = useState(false)
    const [fact, setFact] = useState<string>('');
    const [isLoadingfact, setisLoadingFact] = useState(false);

    return (
        <div>
            <h1 className="my-4">Buttons</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-1 gap-2">
                <Button theme="primary">Primary</Button>
                <Button theme="secondary">Secondary</Button>
                <Button theme="accent">Accent</Button>
                <Button theme="success">Success</Button>
                <Button theme="warning">Warning</Button>
                <Button theme="error">Error</Button>
            </div>
            <hr className="my-4 -mx-4"></hr>
            <h1 className="my-4">Menu</h1>
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
            <h1 className="my-4">Textbox</h1>
            <Input type="text" id="test" name="test" label="Test" placeholder="Write your text here..."></Input>
            <hr className="my-4 -mx-4"></hr>
            <h1 className="my-4">Listbox</h1>
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
            <h1 className="my-4">Form</h1>
            <TestForm></TestForm>
            <hr className="my-4 -mx-4"></hr>
            <h1 className="my-4">Dialog</h1>
            <Button theme="primary" onClick={() => setIsOpen(true)}>Open</Button>
            <UiDialog open={isOpen} onClose={() => setIsOpen(false)}>
                <>
                    <Dialog.Title as="h3">This is a dialog header</Dialog.Title>
                    <Dialog.Description className="text-gray-800 mt-2">
                        This is the dialog description or content
                    </Dialog.Description>

                    <Button className="mt-4" theme="primary" onClick={() => setIsOpen(false)}>Close</Button>
                </>
            </UiDialog>
            <hr className="my-4 -mx-4"></hr>
            <h1 className="my-4">API</h1>
            <Button theme="primary" className="mr-4" onClick={() => {
                api.doApiCall(api.fact, setisLoadingFact)
                    .then(r => setFact(r))
            }}>Call Cat Api</Button>
            <Button theme="primary" className="" onClick={() => {
                api.doApiCall(api.getVacancies)
                    .then(console.log)
            }}>Call Api</Button>
            {!isLoadingfact && fact && <div>{fact}</div>}
            {isLoadingfact && <div>Loading Fact ...</div>}
            <hr className="my-4 -mx-4"></hr>
            <h1 className="my-4">Popover</h1>
            <Popover className="relative" >
                <Popover.Button>Popover</Popover.Button>
                <Popover.Panel>
                    <div className="grid grid-cols-2">
                        <a href="/analytics">Analytics</a>
                        <a href="/engagement">Engagement</a>
                        <a href="/security">Security</a>
                        <a href="/integrations">Integrations</a>
                    </div>
                </Popover.Panel>
            </Popover>
        </div>
    );
}

export default Playground;