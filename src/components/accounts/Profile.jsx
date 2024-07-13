import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Loading from '../utility/Loading';
import SignInToViewThisPage from '../utility/SignInToViewThisPage';

export default function Profile() {
    const { isAuthenticated, logout, getToken } = useAuth();
    const [userInfo, setUserInfo] = useState({
        email: '',
        fname: '',
        lname: '',
        gender_id: '',
        dob: '',
        country_id: '',
        mobile_number: ''
    });
    const [genders, setGenders] = useState([]);
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const fetchReferenceData = async () => {
            try {
                const response = await fetch('https://allcardb.com/api/php/cgid.php', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                if (data.success) {
                    setGenders(data.data.genders);
                    setCountries(data.data.countries);
                } else {
                    setError(data.message || 'Failed to fetch reference data');
                }
            } catch (error) {
                setError(error.message || 'Error fetching reference data');
            }
        };

        fetchReferenceData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (isAuthenticated) {
                try {
                    const token = await getToken();
                    const response = await fetch('https://allcardb.com/api/php/user.php', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        credentials: 'include'
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
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
            const response = await fetch('https://allcardb.com/api/php/user.php', {
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
                            disabled={true}
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
                        <select
                            name="gender_id"
                            value={userInfo.gender_id}
                            onChange={handleChange}
                            className="mb-4 w-72 h-12 p-2 border rounded-md"
                        >
                            <option value="">Select Gender</option>
                            {genders.map((gender) => (
                                <option key={gender.id} value={gender.id}>{gender.gender}</option>
                            ))}
                        </select>
                        <input
                            type="date"
                            name="dob"
                            value={userInfo.dob}
                            onChange={handleChange}
                            className="mb-4 w-72 h-12 p-2 border rounded-md"
                        />
                        <select
                            name="country_id"
                            value={userInfo.country_id}
                            onChange={handleChange}
                            className="mb-4 w-72 h-12 p-2 border rounded-md"
                        >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country.id} value={country.id}>{country.country}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            name="mobile_number"
                            value={userInfo.mobile_number}
                            onChange={handleChange}
                            className="mb-4 w-72 h-12 p-2 border rounded-md"
                            placeholder="Mobile Number"
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
