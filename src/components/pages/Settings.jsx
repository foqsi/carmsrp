import React, { useState } from 'react';
import { FaBell, FaEnvelope, FaMobile, FaLock, FaLanguage, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const SettingsPage = ({ initialSettings, onUpdateSettings }) => {
    const [settings, setSettings] = useState(initialSettings);

    const handleToggle = (setting) => {
        setSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
    };

    const handleSave = () => {
        onUpdateSettings(settings);
        // Here you would typically send the updated settings to your backend
        console.log('Settings updated:', settings);
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaEnvelope className="text-gray-500 mr-3" />
                            <span>Email Notifications</span>
                        </div>
                        <button onClick={() => handleToggle('emailNotifications')} className="text-2xl">
                            {settings.emailNotifications ? <FaToggleOn className="text-blue-500" /> : <FaToggleOff className="text-gray-400" />}
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaMobile className="text-gray-500 mr-3" />
                            <span>Text Notifications</span>
                        </div>
                        <button onClick={() => handleToggle('textNotifications')} className="text-2xl">
                            {settings.textNotifications ? <FaToggleOn className="text-blue-500" /> : <FaToggleOff className="text-gray-400" />}
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaBell className="text-gray-500 mr-3" />
                            <span>Push Notifications</span>
                        </div>
                        <button onClick={() => handleToggle('pushNotifications')} className="text-2xl">
                            {settings.pushNotifications ? <FaToggleOn className="text-blue-500" /> : <FaToggleOff className="text-gray-400" />}
                        </button>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaLock className="text-gray-500 mr-3" />
                            <span>Two-Factor Authentication</span>
                        </div>
                        <button onClick={() => handleToggle('twoFactorAuth')} className="text-2xl">
                            {settings.twoFactorAuth ? <FaToggleOn className="text-blue-500" /> : <FaToggleOff className="text-gray-400" />}
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaLanguage className="text-gray-500 mr-3" />
                            <span>Language</span>
                        </div>
                        <select
                            value={settings.language}
                            onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                            className="mt-1 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                            {/* Add more language options as needed */}
                        </select>
                    </div>
                </div>
            </section>

            <button
                onClick={handleSave}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Save Changes
            </button>
        </div>
    );
};

export default SettingsPage;