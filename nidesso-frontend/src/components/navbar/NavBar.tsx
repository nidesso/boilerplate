import { Transition } from "@headlessui/react";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar(props: { className?: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`bg-th-primary-900 ${props.className ? props.className : ''}`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-16 w-16 -ml-3"
                                src={process.env.PUBLIC_URL + '/logo_fox.png'}
                                alt="Workflow"
                            />
                        </div>
                        <span className="text-2xl font-bold text-white">Nidesso</span>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <NavLink to='/'
                                    className={({ isActive }) => `hover:bg-th-primary-800 hover:text-white px-3 py-2 rounded-md text-sm ${isActive ? 'text-white font-bold' : 'text-gray-100 font-medium'}`}>Home</NavLink>
                                <NavLink to='about-us'
                                    className={({ isActive }) => `hover:bg-th-primary-800 hover:text-white px-3 py-2 rounded-md text-sm ${isActive ? 'text-white font-bold' : 'text-gray-100 font-medium'}`}>Über uns</NavLink>
                                {!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ?
                                    <NavLink to='login'
                                        className={({ isActive }) => `hover:bg-th-primary-800 hover:text-white px-3 py-2 rounded-md text-sm ${isActive ? 'text-white font-bold' : 'text-gray-100 font-medium'}`}>Login</NavLink> :
                                    null}
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
                            <NavLink to='/'
                                className={({ isActive }) => `hover:bg-th-primary-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white' : 'text-gray-100'}`}>Home</NavLink>
                            <NavLink to='about-us'
                                className={({ isActive }) => `hover:bg-th-primary-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white' : 'text-gray-100'}`}>Über uns</NavLink>
                            <NavLink to='login'
                                className={({ isActive }) => `hover:bg-th-primary-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white' : 'text-gray-100'}`}>Login</NavLink>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

export default NavBar;