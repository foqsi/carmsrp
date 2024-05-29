import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Loading from '../utility/Loading';
import SignInToViewThisPage from '../utility/SignInToViewThisPage';

export default function Profile() {
    const { isAuthenticated, logout } = useAuth();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (isAuthenticated) {
                const response = await fetch('/api/get-user.php');
                const data = await response.json();
                if (data.success) {
                    setUserInfo(data.data);
                } else {
                    console.error('Failed to fetch user data:', data.message);
                }
            }
        };

        fetchData();
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return (
            <SignInToViewThisPage />
        )
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <h2 className="text-4xl font-bold text-gray-600 mb-6">Profile</h2>
            {userInfo ? (
                <div>
                    <p className="text-xl">Welcome back, {userInfo.username}!</p>
                    <button onClick={logout} className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">Logout</button>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}
