import { Transition } from "@headlessui/react";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavItem } from "../../models/interfaces/nav-item";

function NavBar(props: { className?: string, navItems: NavItem[] }) {
    const [isOpen, setIsOpen] = useState(false);

    const renderNavItems = (items: NavItem[]) => items.map(navItem => (navItem.show ?
        <NavLink to={navItem.link}
            className={({ isActive }) => `hover:bg-th-primary-800 hover:text-white px-3 py-2 rounded-md text-sm ${isActive ? 'text-white font-bold' : 'text-gray-100 font-medium'}`}>{navItem.name}</NavLink>
        : null
    ))

    return (
        <nav className={`bg-th-primary-900 ${props.className ?? ''}`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <NavLink to='/'>
                            <div className="flex-shrink-0 flex-row flex items-center">
                                <img className="h-16 w-16 -ml-3"
                                    src={process.env.PUBLIC_URL + '/logo_fox.png'}
                                    alt="Workflow"
                                />
                                <span className="text-2xl font-bold text-white ml-2">Nidesso</span>
                            </div>
                        </NavLink>
                        <div className="hidden md:block">
                            <div className="ml-6 flex items-baseline space-x-4">
                                {renderNavItems(props.navItems)}
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-th-primary-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-th-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {() => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={React.createRef()} className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {renderNavItems(props.navItems)}
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

export default NavBar;