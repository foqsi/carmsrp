import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

/**
 * MobileMenuButton Component.
 *
 * A dropdown menu that displays the main navigation links on mobile views.
 *
 * @param {Object[]} navigation - Array of navigation objects containing name, href, and current status.
 */
export default function MobileMenuButton({ open }) {
    return (
        // Container for the mobile menu button. It's hidden on screens wider than "small".
        <div className="sm:hidden inset-y-0 left-0 flex items-center">
            {/* Button that toggles based on the `open` prop */}
            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                {/* Text for screen readers to enhance accessibility */}
                <span className="sr-only">Open main menu</span>
                {/* Ternary operation to switch between close (X) and hamburger (Bars) icons */}
                {open ? (
                    // Close icon for when the menu is open
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                    // Hamburger icon for when the menu is closed
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
            </Disclosure.Button>
        </div>
    );
}
