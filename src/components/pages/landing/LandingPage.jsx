import React, { useState } from 'react';

const LandingPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality here
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col">
            {/* <header className="bg-white shadow-sm p-4">
                <nav className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-600">All Car DB</h1>
                    <div>
                        <button className="text-blue-600 hover:text-blue-800 mr-4">Sign In</button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Sign Up
                        </button>
                    </div>
                </nav>
            </header> */}

            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to All Car DB</h2>
                    <p className="text-xl text-gray-600 mb-8">Your go-to platform for research and community engagement regarding vehicles</p>

                    <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-r-lg">
                                Search
                            </button>
                        </div>
                    </form>
                </section>

                <section className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Search & Discover</h3>
                        <p className="text-gray-600">Find answers to your questions or explore new topics with our powerful search feature.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Join Discussions</h3>
                        <p className="text-gray-600">Participate in forum discussions and comment sections to share your insights.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Personalize Your Profile</h3>
                        <p className="text-gray-600">Create and customize your profile to connect with like-minded individuals.</p>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 py-4">
                <div className="container mx-auto text-center text-gray-600">
                    <p>&copy; 2024 All Car DB. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;