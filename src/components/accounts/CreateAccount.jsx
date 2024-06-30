import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import PasswordError from '../utility/passwordError.js';
import ErrorMessage from '../utility/ErrorMessage.js';
import { validatePasswordComplexity } from '../utility/passwordReq.js';

export default function CreateAccount({ setCreateAccount }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState([]);
    const [registerError, setRegisterError] = useState('');
    const [failedAttempts, setFailedAttempts] = useState(0);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError('');
        setRegisterError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError(['Passwords do not match']);
            setFailedAttempts(prev => prev + 1);
            return;
        }

        const complexityErrors = validatePasswordComplexity(formData.password);
        if (complexityErrors.length > 0) {
            setError(complexityErrors);
            setFailedAttempts(prev => prev + 1);
            return;
        }

        try {
            const response = await fetch('http://localhost/register.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData)
            });

            const data = await response.json();
            if (!response.ok || !data.success) {
                throw new Error(data.message || 'Failed to register');
            }

            login();
            navigate('/');

        } catch (error) {
            console.error('Error:', error);
            setRegisterError('Error: Please email support@allcardb.com');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-96 min-h-[500px] bg-white rounded-xl shadow-md">
            <div className="flex flex-col items-center justify-center w-full h-24 bg-white rounded-t-xl">
                <h2 className="text-4xl font-bold text-zinc-600">Create account</h2>
            </div>
            <div className="flex flex-col items-center justify-center w-full flex-grow">
                <form className="flex flex-col items-center justify-center w-full h-90" onSubmit={handleSubmit}>
                    <input
                        className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    {failedAttempts < 3 && <PasswordError message={error} />}
                    {failedAttempts >= 3 && (
                        <PasswordError message={[
                            'at least 8 characters long',
                            'at least one uppercase letter',
                            'at least one lowercase letter',
                            'at least one number',
                            'at least one symbol: !@#$%^&*()'
                        ]} />
                    )}
                    {registerError && <ErrorMessage message={registerError} />}
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
