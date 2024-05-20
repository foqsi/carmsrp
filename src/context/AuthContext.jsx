import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Initialize state from localStorage to keep user logged in between sessions
        return localStorage.getItem('isAuthenticated') === 'true';
    });

    // Whenever isAuthenticated changes, update localStorage
    useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated);
    }, [isAuthenticated]);

    const login = () => setIsAuthenticated(true);
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated'); // Clear auth state on logout
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
