import React from 'react';

const LandingPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center text-black px-4">
            <div className="bg-white flex flex-col md:flex-row items-center md:items-start max-w-6xl w-full rounded-xl">
                <div className="text-left p-8 md:w-1/2">
                    <h1 className="text-5xl md:text-5xl font-bold mb-4 text-center">ALL CAR DATABASE</h1>
                    <div className="relative mb-8">
                        <input
                            type="text"
                            className="w-full p-4 pl-10 pr-10 bg-white border border-black rounded-lg focus:outline-none"
                            placeholder="Search"
                        />
                        <svg
                            className="w-6 h-6 text-black absolute right-3 top-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35m1.75-5.4a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">Get Started</button>
                        <button className="bg-transparent border border-black text-black px-6 py-3 rounded-lg">Sign Up</button>
                    </div>
                </div>
                <div className="relative w-full md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
                    {/* <img src="/path/to/your/image.png" alt="" className="w-full h-auto" /> */}
                    <div className="absolute top-0 right-0 mt-4 mr-4">
                        <h2 className="text-2xl font-bold">Find various information and statistics about vehicles.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
