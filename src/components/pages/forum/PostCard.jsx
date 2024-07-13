import React, { useState, useRef, useEffect } from 'react';
import { FaThumbsUp, FaThumbsDown, FaComment, FaShare, FaEllipsisH, FaBookmark, FaEyeSlash, FaFlag } from 'react-icons/fa';

const PostCard = ({ post }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const getTimeAgo = (date) => {
        const seconds = Math.floor((new Date() - date) / 1000);
        const intervals = [
            { label: 'year', seconds: 31536000 },
            { label: 'month', seconds: 2592000 },
            { label: 'day', seconds: 86400 },
            { label: 'hour', seconds: 3600 },
            { label: 'minute', seconds: 60 },
            { label: 'second', seconds: 1 }
        ];

        for (let i = 0; i < intervals.length; i++) {
            const interval = intervals[i];
            const count = Math.floor(seconds / interval.seconds);
            if (count >= 1) {
                return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
            }
        }
        return 'just now';
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLike = () => {
        console.log('Liked post:', post.id);
        // Implement like functionality
    };

    const handleDislike = () => {
        console.log('Disliked post:', post.id);
        // Implement dislike functionality
    };

    const handleComment = () => {
        console.log('Comment on post:', post.id);
        // Implement comment functionality
    };

    const handleShare = () => {
        console.log('Share post:', post.id);
        // Implement share functionality
    };

    const handleSave = () => {
        console.log('Save post:', post.id);
        setDropdownOpen(false);
        // Implement save functionality
    };

    const handleHide = () => {
        console.log('Hide post:', post.id);
        setDropdownOpen(false);
        // Implement hide functionality
    };

    const handleReport = () => {
        console.log('Report post:', post.id);
        setDropdownOpen(false);
        // Implement report functionality
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4 flex">
            <div className="flex-grow">
                <div className="flex items-center mb-2">
                    <img src={post.userProfilePic} alt={post.userName} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                        <h3 className="font-bold">{post.userName}</h3>
                        <p className="text-sm text-gray-500">{getTimeAgo(post.createdAt)}</p>
                    </div>
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="flex items-center space-x-4">
                    <button onClick={handleLike} className="flex items-center text-gray-500 hover:text-blue-500">
                        <FaThumbsUp className="mr-1" />
                        <span className="text-sm">{post.likes}</span>
                    </button>
                    <button onClick={handleDislike} className="flex items-center text-gray-500 hover:text-red-500">
                        <FaThumbsDown className="mr-1" />
                        <span className="text-sm">{post.dislikes}</span>
                    </button>
                    <button onClick={handleComment} className="flex items-center text-gray-500 hover:text-gray-700">
                        <FaComment className="mr-1" />
                        <span className="text-sm">{post.comments} comments</span>
                    </button>
                    <button onClick={handleShare} className="flex items-center text-gray-500 hover:text-gray-700">
                        <FaShare className="mr-1" />
                        <span className="text-sm">Share</span>
                    </button>
                </div>
            </div>
            <div className="relative" ref={dropdownRef}>
                <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <FaEllipsisH />
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                        <button onClick={handleSave} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <FaBookmark className="inline mr-2" /> Save
                        </button>
                        <button onClick={handleHide} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <FaEyeSlash className="inline mr-2" /> Hide
                        </button>
                        <button onClick={handleReport} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <FaFlag className="inline mr-2" /> Report
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostCard;