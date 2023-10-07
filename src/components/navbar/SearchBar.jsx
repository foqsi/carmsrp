import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

/**
 * SearchBar Component.
 *
 * A responsive search bar component that provides search functionality.
 * - For mobile views, it displays a button with a magnifying glass icon.
 *   Clicking on this button will expand a search input field. There's also
 *   a close button to hide the search input.
 * - For desktop views, it simply displays a search input field.
 */

export default function SearchBar() {
    // State to control the visibility of the mobile search input
    const [showSearchInput, setShowSearchInput] = useState(false);

    return (
        // Wrapper div to handle positioning of child elements
        <div className="flex flex-grow items-left sm:w-auto relative z-20">

            {/* Conditional rendering of mobile search input */}
            {showSearchInput ? (
                // Mobile search input
                <div className="flex md:hidden w-full top-0 left-0">
                    {/* The input field for mobile view */}
                    <input
                        className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-700 pr-10"
                        type="text"
                        placeholder="Search All Cars"
                    />
                    {/* Close button for mobile search input */}
                    <button
                        onClick={() => setShowSearchInput(false)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl"
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>
            ) : (
                // Search icon button which toggles the mobile search input on/off
                <button
                    onClick={() => setShowSearchInput(!showSearchInput)}
                    className="px-4 py-2 rounded-md ml-2 flex md:hidden"
                >
                    <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                </button>
            )}

            {/* Desktop search input */}
            <div className="hidden md:flex w-full">
                {/* The input field for desktop view */}
                <input
                    className="w-full pr-2 py-2 rounded-md border border-gray-300 pl-10"
                    type="text"
                    placeholder="Search All Cars"
                />
            </div>
        </div>
    );
}
