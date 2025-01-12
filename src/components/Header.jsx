import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { account } from '../services/appwrite';
import { setUser, logout, setLoading, setError } from '../store/authSlice';
import Logout from './Logout';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        const loadUserFromStorage = async () => {
            dispatch(setLoading());
            
            // Check local storage first
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                dispatch(setUser(JSON.parse(storedUser)));
            }
    
            try {
                // Fetch user data from the server
                const currentUser = await account.get();
                dispatch(setUser(currentUser));
                localStorage.setItem('user', JSON.stringify(currentUser));
            } catch (err) {
                console.error('Error during user authentication:', err);
                dispatch(logout());
                localStorage.removeItem('user');
            }
        };
    
        loadUserFromStorage();
    }, [dispatch]);
    

    const handleLogout = async () => {
        try {
            await account.deleteSession('current');
            dispatch(logout());
            localStorage.removeItem('user');
            navigate('/login');
        } catch (err) {
            console.error('Logout failed:', err);
            dispatch(setError('Logout failed. Please try again.'));
        }
    };

    return (
        <header className="bg-blue-500 text-white p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-xl font-bold">
                    <Link to="/" aria-label="Home">
                        My Shop
                    </Link>
                </div>

                <nav className="flex space-x-4">
                    <Link to="/" className="hover:text-gray-200" aria-label="Home">
                        Home
                    </Link>
                    <Link to="/all_products" className="hover:text-gray-200" aria-label="Products">
                        Products
                    </Link>
                    <Link to="/about" className="hover:text-gray-200" aria-label="About">
                        About
                    </Link>
                    <Link to="/contact" className="hover:text-gray-200" aria-label="Contact">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center space-x-4">
                    {loading && <span>Loading...</span>}
                    {error && <span className="text-red-500">{error}</span>}

                    {user ? (
                        <>
                            {user.email === 'rahulkumar202134@gmail.com' && (
                                <Link
                                    to="/product_listing"
                                    className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
                                    aria-label="Admin Product Listing"
                                >
                                    Product Listing
                                </Link>
                            )}
                            <span className="font-semibold">
                                Welcome, {user.name || 'User'}!
                            </span>
                            <Logout onLogout={handleLogout} />
                            
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
                                aria-label="Login"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
                                aria-label="Register"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
