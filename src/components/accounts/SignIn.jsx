import React, { useState } from "react";
import logo from "../../assets/logo/logo-black.png";
import CreateAccount from "./CreateAccount.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from 'react-router-dom';
import { signInOptions } from "../utility/SigninOptions.js";

export default function SignIn() {
    const [createAccount, setCreateAccount] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please enter email and password.");
            return;
        }

        try {
            const response = await fetch('https://allcardb.com/api/php/user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });

            const contentType = response.headers.get('Content-Type');

            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();

                if (response.ok && data.success) {
                    console.log(data.id);
                    login();
                    navigate('/');
                } else {
                    console.error('Response error:', data);
                    setError(data.message || "An error occurred during login.");
                }
            } else {
                const text = await response.text();
                console.error('Unexpected response:', text);
                setError("An unexpected error occurred. Please try again later.");
            }
        } catch (error) {
            console.error(error);
            setError("An error occurred while connecting to the database.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen mt-[-100px]">
            <div className="flex flex-col items-center justify-center w-96 bg-white rounded-xl">
                <img src={logo} alt="logo" className="w-72 h-auto mb-6 bg-white" />

                <div className="mb-4 flex justify-center items-center w-full">
                    <hr className="border-t border-gray-400 flex-grow mx-2" />
                </div>

                {createAccount ? (
                    <CreateAccount setCreateAccount={setCreateAccount} />
                ) : (
                    <div className="flex flex-col items-center justify-center w-96 min-h-[500px] bg-white rounded-xl shadow-md">
                        <div className="flex flex-col items-center justify-center w-full h-24 bg-white rounded-t-xl">
                            <h2 className="text-4xl font-bold text-zinc-600">Sign in</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full flex-grow">
                            <form className="flex flex-col items-center justify-center w-full h-90" onSubmit={handleLogin}>
                                <input
                                    className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                                <button type="submit"
                                    className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white"
                                >
                                    Login
                                </button>
                            </form>

                            <div className="mb-4 flex justify-center items-center w-full">
                                <hr className="border-t border-gray-400 flex-grow mx-2" />
                                <span>or</span>
                                <hr className="border-t border-gray-400 flex-grow mx-2" />
                            </div>

                            {/* TODO: Implement Google / Meta sign in options */}
                            {/* {signInOptions.map((option) => (
                            <button key={option.name} className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 hover:bg-gray-400 rounded-md flex justify-start items-center">
                                <img className={option.className} src={option.icon} alt={option.name} />
                                <span className="ml-4">Sign in with {option.name}</span>
                            </button>
                        ))} */}

                            <button onClick={() => setCreateAccount(true)} className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">
                                Create Account
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
