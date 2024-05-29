import { Menu } from '@headlessui/react';

export default function AuthenticatedUserButton() {
    return (
        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 focus:ring-offset-gray-800 mx-4">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img
                className="h-8 w-8 rounded-full"
                src="https://as1.ftcdn.net/v2/jpg/03/58/90/78/1000_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"
                alt=""
            />
        </Menu.Button>
    );
}
