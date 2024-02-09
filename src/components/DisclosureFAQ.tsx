// DisclosureFAQ.tsx
import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';

type DisclosureComponentProps = {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
};

const DisclosureComponent = ({ title, children, isOpen, onToggle }: DisclosureComponentProps) => {
    return (
        <Disclosure>
            {({ open, close }) => (
                <>
                    <Disclosure.Button
                        className={`flex text-left font-medium text-xl py-2 ${open ? 'open' : ''}`}
                        onClick={() => {
                            onToggle();
                            close(); // Close other disclosures when this one is opened
                        }}
                    >
                        <span>{title}</span>
                    </Disclosure.Button>

                    <Transition
                        show={isOpen}
                        enter="transition-opacity duration-300 ease-in-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-3000 ease-in-out"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        {open && (
                            <Disclosure.Panel className="text-sm text-slate-600 px-4 pb-4">
                                {children}
                            </Disclosure.Panel>
                        )}
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};

export default DisclosureComponent;