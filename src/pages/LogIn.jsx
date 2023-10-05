import React, { useState } from "react";


export default function Login() {
    const [showRegister, setShowRegister] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen mt-[-200px]">
            {showForgotPassword ? (
                <ForgotPasswordForm setShowForgotPassword={setShowForgotPassword} />
            ) : showRegister ? (
                <RegisterForm setShowRegister={setShowRegister} />
            ) : (
                <div className="flex flex-col items-center justify-center w-96 h-96 bg-white rounded-xl shadow-md">
                    <div className="flex flex-col items-center justify-center w-96 h-96 bg-white rounded-xl shadow-md">
                        <div className="flex flex-col items-center justify-center w-full h-full rounded-t-xl">
                            <h1 className="text-4xl font-bold text-gray-600">
                                Login</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full h-72">
                            <form className="flex flex-col items-center justify-center w-full h-full">
                                <input className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md" type="text" placeholder="Username" />
                                <input className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md" type="password" placeholder="Password" />
                                <button className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">
                                    Login</button>
                                <button
                                    onClick={() => setShowRegister(true)}
                                    className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">
                                    Register</button>
                                <div className="flex flex-row items-center justify-center w-full h-12">
                                    <p className="ml-2">
                                        Forgot Password? Click{" "}
                                        <span
                                            onClick={() => setShowForgotPassword(true)}
                                            className="hover:underline text-sky-600 cursor-pointer">
                                            here
                                        </span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function RegisterForm({ setShowRegister }) {
    return (
        <div className="flex flex-col items-center justify-center w-96 h-96 bg-white rounded-xl shadow-md">
            <div className="flex flex-col items-center justify-center w-full h-24 bg-white rounded-t-xl">
                <h1 className="text-4xl font-bold text-zinc-600">Registration</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-72">
                <form className="flex flex-col items-center justify-center w-full h-full">
                    <input className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md" type="text" placeholder="Username" />
                    <input className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md" type="password" placeholder="Password" />
                    <input className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md" type="email" placeholder="Email" />
                    <button className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">Register</button>
                    <button
                        onClick={() => setShowRegister(false)}
                        className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">Back to Login</button>
                </form>
            </div>
        </div>
    );
}

function ForgotPasswordForm({ setShowForgotPassword }) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // setTimeout(() => {
        //     setShowForgotPassword(false);
        //     setSubmitted(false);
        // }, 6000);
    }

    return (
        <div className="flex flex-col items-center justify-center w-96 h-96 bg-white rounded-xl shadow-md">
            <div className="flex flex-col items-center justify-center w-full h-24 bg-white rounded-t-xl">
                <h1 className="text-4xl font-bold text-zinc-600">Forgot Password</h1>
            </div>
            {submitted && <p className="text-center">Please check your email.</p>}
            <div className="flex flex-col items-center justify-center w-full h-72">
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full h-full">
                    <input className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md" type="email" placeholder="Email" />
                    <button type="submit" className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">Reset Password</button>
                    <button
                        onClick={() => setShowForgotPassword(false)}
                        className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">Back to Login</button>
                </form>
            </div>
        </div>
    );
}