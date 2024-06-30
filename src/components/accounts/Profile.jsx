import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Loading from '../utility/Loading';
import SignInToViewThisPage from '../utility/SignInToViewThisPage';

export default function Profile() {
    const { isAuthenticated, logout, getToken } = useAuth();
    const [userInfo, setUserInfo] = useState({ email: '', fname: '', lname: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (isAuthenticated) {
                try {
                    const token = await getToken();
                    const response = await fetch('http://localhost/test.php', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        credentials: 'include'
                    });
                    if (!response.ok) {
                        console.log("response not ok");
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    console.log(data);
                    if (data.success) {
                        setUserInfo(data.data);
                    } else {
                        setError(data.message || 'Failed to fetch user data');
                    }
                } catch (error) {
                    setError(error.message || 'Error fetching user data');
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchData();
    }, [isAuthenticated]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await getToken();
            const response = await fetch('http://localhost/test.php', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                credentials: 'include',
                body: JSON.stringify(userInfo),
            });
            const data = await response.json();
            if (data.success) {
                setEditing(false);
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError('Error updating profile');
        }
    };

    if (!isAuthenticated) {
        return <SignInToViewThisPage />;
    }

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <h2 className="text-4xl font-bold text-gray-600 mb-6">Profile</h2>
                <p className="text-red-500 text-xl mb-4">{error}</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <h2 className="text-4xl font-bold text-gray-600 mb-6">Profile</h2>
            {userInfo ? (
                editing ? (
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <input
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleChange}
                            className="mb-4 w-72 h-12 p-2 border rounded-md"
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            name="fname"
                            value={userInfo.fname}
                            onChange={handleChange}
                            className="mb-4 w-72 h-12 p-2 border rounded-md"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            name="lname"
                            value={userInfo.lname}
                            onChange={handleChange}
                            className="mb-4 w-72 h-12 p-2 border rounded-md"
                            placeholder="Last Name"
                        />
                        <button type="submit" className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">Save</button>
                    </form>
                ) : (
                    <div>
                        <p className="text-xl">Welcome back, {userInfo.fname}!</p>
                        <p className="text-xl">{userInfo.email}</p>
                        <button onClick={() => setEditing(true)} className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">Edit Profile</button>
                        <button onClick={logout} className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">Logout</button>
                    </div>
                )
            ) : (
                <p className="text-xl">Loading user information...</p>
            )}
        </div>
    );
}
