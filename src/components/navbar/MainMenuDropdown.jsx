import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { classNames } from './NavigationLinks';

export default function MainNavigationDropdown({ navigation }) {
    return (
        <Menu as="div" className="relative">
            <Menu.Button className="flex items-center text-white px-3 py-2 rounded-md text-sm font-medium">
                <Bars3Icon className='h-6 w-6' /> {/* Icon for the menu button */}
                <span className="ml-2">Menu</span>
            </Menu.Button>

            <Transition as={Fragment}>
                {/* Dropdown menu with navigation links */}
                <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {navigation.map((item) => (
                        <Menu.Item key={item.name}>
                            <a href={item.href} className='block px-4 py-2 text-sm font-medium bg-zinc-900 text-gray-300 hover:bg-gray-700 hover:text-white text-center'>
                                {item.name}
                            </a>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
