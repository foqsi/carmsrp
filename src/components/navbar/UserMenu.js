import { Menu } from '@headlessui/react';
import AuthenticatedUserButton from './AuthenticatedUserButton';
import SignInButton from './SignInButton';
import ProfileDropdownMenu from './ProfileDropdownMenu';

export function UserMenu({ isAuthenticated, logout }) {
    return (
        <Menu as="div" className="relative ml-3">
            <div className="flex items-center">
                {isAuthenticated ? (
                    <AuthenticatedUserButton />
                ) : (
                    <SignInButton />
                )}
            </div>
            <ProfileDropdownMenu logout={logout} />
        </Menu>
    );
}
