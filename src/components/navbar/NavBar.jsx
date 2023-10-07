import { useState, Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { isLoggedIn } from '../../utils/auth.js';
import Logo from './Logo.jsx';
import MobileMenuButton from './MobileMenuButton.jsx';
import MainNavigationDropdown from './MainMenuDropdown.jsx';
import { NavigationLinks, classNames } from './NavigationLinks.jsx';
import SearchBar from './SearchBar.jsx';

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Top 25 Cars', href: '/TopCars', current: false },
    { name: 'Car of the Day', href: '/CarOfTheDay', current: false },
    { name: 'Random Car', href: '/RandomCar', current: false },
]

/**
 * NavBar Component.
 *
 * The primary navigation bar for the application. Displays logo, main navigation,
 * search functionality, and user-specific options.
 */

export default function NavBar() {
    const [showMainMenu, setShowMainMenu] = useState(false);

    // Toggles the state of the main menu
    const toggleMainMenu = () => {
        setShowMainMenu(!showMainMenu);
    };

    return (
        // Disclosure component to manage the collapsibility of the navbar
        <Disclosure as="nav" className="bg-zinc-900 fixed top-0 w-full z-20">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">

                            {/* Button for mobile menu toggle */}
                            <MobileMenuButton open={open} />

                            {/* Logo and Main Navigation dropdown */}
                            <div className="flex items-center space-x-4">
                                <Logo />
                                <div className="hidden sm:flex">

                                    {/* Dropdown menu for main navigation */}
                                    <MainNavigationDropdown navigation={navigation} />
                                </div>
                            </div>

                            {/* Search Bar Component */}
                            <div className="flex-grow">
                                <SearchBar />
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* User-specific options (Profile, Sign-in, etc.) */}
                                <Menu as="div" className="relative ml-3">
                                    <div className="flex items-center">
                                        {isLoggedIn ? (
                                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 focus:ring-offset-gray-800 mx-4">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://as1.ftcdn.net/v2/jpg/03/58/90/78/1000_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        ) : (
                                            <a href="/LogIn">
                                                <button className='bg-gray-700 hover:bg-gray-500 text-white font-bold py-1.5 px-1.5 rounded'> Sign In </button>
                                            </a>
                                        )}

                                        {/* Use App button */}
                                        <a href='#' className='ml-2'>
                                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-1.5 rounded'> Use App </button>
                                        </a>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        {/* Profile dropdown menu */}
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-zinc-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
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
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-900 text-white' : '', 'block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>

                        </div>
                    </div>

                    {/* Mobile-specific navigation links */}
                    <Disclosure.Panel className="sm:hidden text-center">
                        <div className="space-y-1 px-2 pb-3 pt-2">

                            <Disclosure.Button>
                                <NavigationLinks navigation={navigation} />
                            </Disclosure.Button>

                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
