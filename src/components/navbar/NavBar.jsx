import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import MainNavigationDropdown from './MainMenuDropdown';
import { NavigationLinks } from './NavigationLinks';
import SearchBar from './SearchBar';
import { useAuth } from '../../context/AuthContext';
import { UserMenu } from './UserMenu';

const navigation = [
    { name: 'Home', href: '/', current: false },
    // More navigation items...
];

export default function NavBar() {
    const { isAuthenticated, logout } = useAuth();

    return (
        <Disclosure as="nav" className="bg-zinc-900 fixed top-0 w-full z-20">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <MobileMenuButton open={open} />
                            <div className="flex items-center space-x-4">
                                <Logo />
                                <div className="hidden sm:flex">
                                    <MainNavigationDropdown navigation={navigation} />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <SearchBar />
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <UserMenu isAuthenticated={isAuthenticated} logout={logout} />
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
    );
}
