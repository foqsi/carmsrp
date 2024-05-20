import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';



export default function RegisterForm({ setCreateAccount }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { isAuthenticated, login } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('/api/php/register.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData)
            });
            const result = await response.json(); // Make sure response is expected to be JSON
            if (result.success) {
                // Assuming login is part of successful registration
                // Call login from useAuth if you have such functionality
                login();  // This should be defined in your useAuth context
                alert(result.message);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error registering account: Please email support at support@allcardb.com');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-96 h-120 bg-white rounded-xl shadow-md">
            <div className="flex flex-col items-center justify-center w-full h-24 bg-white rounded-t-xl">
                <h2 className="text-4xl font-bold text-zinc-600">Create account</h2>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-90">
                <form className="flex flex-col items-center justify-center w-full h-full" onSubmit={handleSubmit}>
                    {/* TODO: Possibly create with username instead */}
                    {/* <input
                        className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md"
                        type="username"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    /> */}
                    <input
                        className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {/* TODO: REDIRECT AFTER CREATE ACCOUNT */}
                    <button type="submit" className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">Create Account</button>
                    <button
                        type="button"
                        onClick={() => setCreateAccount(false)}
                        className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">Back to Login</button>
                </form>
            </div>
        </div>
    );
}