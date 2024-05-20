import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function SearchBar() {
    const [showSearchInput, setShowSearchInput] = useState(false);

    return (
        <div className="flex flex-grow items-left sm:w-auto relative z-20">
            {showSearchInput ? (
                // Mobile search input
                <div className="flex md:hidden w-full top-0 left-0">
                    <input
                        className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-700 pr-10"
                        type="text"
                        placeholder="Search All Cars"
                    />
                    <button
                        onClick={() => setShowSearchInput(false)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl"
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => setShowSearchInput(!showSearchInput)}
                    className="px-4 py-2 rounded-md ml-2 flex md:hidden"
                >
                    <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                </button>
            )}
            <div className="hidden md:flex w-full">
                <input
                    className="w-full pr-2 py-2 rounded-md border border-gray-300 pl-2"
                    type="text"
                    placeholder="Search All Cars"
                />
            </div>
        </div>
    );
}
