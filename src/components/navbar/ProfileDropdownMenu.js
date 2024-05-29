import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { classNames } from './NavigationLinks';

export default function ProfileDropdownMenu({ logout }) {
    return (
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-zinc-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="/Profile"
                            className={classNames(active ? 'bg-gray-900 text-white' : '', 'block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white')}
                        >
                            Profile
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                            className={classNames(active ? 'bg-gray-900 text-white' : '', 'block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700')}
                        >
                            Settings
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a onClick={logout}
                            href="/Login"
                            className={classNames(active ? 'bg-gray-900 text-white' : '', 'block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700')}
                        >
                            Sign out
                        </a>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Transition>
    );
}
