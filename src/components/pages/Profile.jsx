import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCalendar, FaMapMarkerAlt, FaPencilAlt } from 'react-icons/fa';

const ProfilePage = ({ user, onUpdateProfile }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(user);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateProfile(editedUser);
        setIsEditing(false);
    };
// test 
    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">User Profile</h1>
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center text-blue-500 hover:text-blue-600"
                >
                    <FaPencilAlt className="mr-2" />
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
            </div>

            {!isEditing ? (
                <div className="space-y-4">
                    <div className="flex items-center">
                        <FaUser className="text-gray-500 mr-3" />
                        <span>{user.name}</span>
                    </div>
                    <div className="flex items-center">
                        <FaEnvelope className="text-gray-500 mr-3" />
                        <span>{user.email}</span>
                    </div>
                    <div className="flex items-center">
                        <FaCalendar className="text-gray-500 mr-3" />
                        <span>{user.birthday}</span>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-gray-500 mr-3" />
                        <span>{user.location}</span>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Bio</h3>
                        <p className="text-gray-700">{user.bio}</p>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={editedUser.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={editedUser.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Birthday</label>
                        <input
                            type="date"
                            id="birthday"
                            name="birthday"
                            value={editedUser.birthday}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={editedUser.location}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                        <textarea
                            id="bio"
                            name="bio"
                            rows="3"
                            value={editedUser.bio}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ProfilePage;
