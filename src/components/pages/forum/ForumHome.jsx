import React, { useState, useEffect, useRef } from 'react';
import PostCard from './PostCard';
import { FaFilter, FaSort, FaThList, FaTh, FaSearch, FaPlus, FaChevronDown } from 'react-icons/fa';

const ForumHome = ({ isLoggedIn, isEmailVerified }) => {
    const [viewMode, setViewMode] = useState('list');
    const [filterOpen, setFilterOpen] = useState(false);
    const [sortOpen, setSortOpen] = useState(false);
    const [viewOpen, setViewOpen] = useState(false);

    const [selectedFilter, setSelectedFilter] = useState('Filters');
    const [selectedSort, setSelectedSort] = useState('Sort');

    const filterRef = useRef(null);
    const sortRef = useRef(null);
    const viewRef = useRef(null);

    // Sample post data
    const samplePosts = [
        {
            id: 1,
            userProfilePic: 'https://example.com/profile1.jpg',
            userName: 'John Doe',
            createdAt: new Date(2024, 6, 1, 10, 30), // July 1, 2024, 10:30 AM
            title: 'First Post Title',
            content: 'This is the content of the first post...',
            likes: 15,
            dislikes: 2,
            comments: 5
        },
        {
            id: 2,
            userProfilePic: 'https://example.com/profile2.jpg',
            userName: 'Jane Smith',
            createdAt: new Date(2024, 6, 2, 14, 45), // July 2, 2024, 2:45 PM
            title: 'Second Post Title',
            content: 'This is the content of the second post...',
            likes: 8,
            dislikes: 1,
            comments: 3
        },
        // Add more sample posts as needed
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setFilterOpen(false);
            }
            if (sortRef.current && !sortRef.current.contains(event.target)) {
                setSortOpen(false);
            }
            if (viewRef.current && !viewRef.current.contains(event.target)) {
                setViewOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleCreatePost = () => {
        if (!isLoggedIn) {
            alert('Please log in to create a post.');
        } else if (!isEmailVerified) {
            alert('Please verify your email to create a post.');
        } else {
            console.log('Create post');
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="flex flex-wrap items-center justify-between mb-4">
                <div className="flex space-x-2 mb-2 sm:mb-0">
                    <div className="relative" ref={filterRef}>
                        <button
                            className="btn btn-secondary flex items-center"
                            onClick={() => setFilterOpen(!filterOpen)}
                        >
                            <FaFilter className="mr-2" />
                            {selectedFilter}
                            <FaChevronDown className="ml-2" />
                        </button>
                        {filterOpen && (
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    {['Filter Option 1', 'Filter Option 2', 'Filter Option 3'].map((option) => (
                                        <a
                                            key={option}
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                            onClick={() => {
                                                setSelectedFilter(option);
                                                setFilterOpen(false);
                                            }}
                                        >
                                            {option}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative" ref={sortRef}>
                        <button
                            className="btn btn-secondary flex items-center"
                            onClick={() => setSortOpen(!sortOpen)}
                        >
                            <FaSort className="mr-2" />
                            {selectedSort}
                            <FaChevronDown className="ml-2" />
                        </button>
                        {sortOpen && (
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    {['Newest', 'Oldest', 'Most Popular'].map((option) => (
                                        <a
                                            key={option}
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                            onClick={() => {
                                                setSelectedSort(option);
                                                setSortOpen(false);
                                            }}
                                        >
                                            {option}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative" ref={viewRef}>
                        <button
                            className="btn btn-secondary flex items-center"
                            onClick={() => setViewOpen(!viewOpen)}
                        >
                            {viewMode === 'list' ? <FaThList className="mr-2" /> : <FaTh className="mr-2" />}
                            View: {viewMode.charAt(0).toUpperCase() + viewMode.slice(1)}
                            <FaChevronDown className="ml-2" />
                        </button>
                        {viewOpen && (
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                        onClick={() => {
                                            setViewMode('list');
                                            setViewOpen(false);
                                        }}
                                    >
                                        <FaThList className="inline mr-2" /> List
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                        onClick={() => {
                                            setViewMode('grid');
                                            setViewOpen(false);
                                        }}
                                    >
                                        <FaTh className="inline mr-2" /> Grid
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button className="btn btn-primary flex items-center" onClick={handleCreatePost}>
                        <FaPlus className="mr-2" /> Create Post
                    </button>
                </div>
            </div>
            <div className="relative mb-4">
                <input
                    type="text"
                    placeholder="Search forum..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className={`grid ${viewMode === 'list' ? '' : 'md:grid-cols-2 gap-4'}`}>
                {samplePosts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default ForumHome;