import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { account } from '../services/appwrite';
import { setUser, logout, setLoading, setError } from '../store/authSlice';
import Logout from './Logout';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon from react-icons

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loading, error } = useSelector((state) => state.auth);
    const { cartItems } = useSelector((state) => state.cart); // Get cart items from Redux
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const loadUserFromStorage = async () => {
            dispatch(setLoading());
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                dispatch(setUser(JSON.parse(storedUser)));
            }
            try {
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
        <header className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-xl tracking-wider">
                    MyApp
                </Link>

                {/* Hamburger Menu */}
                <button
                    className="block sm:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Navigation Links */}
                <nav
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } absolute sm:relative top-14 sm:top-auto left-0 sm:left-auto 
                      bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white w-full sm:w-auto sm:flex space-y-4 sm:space-y-0 
                     sm:space-x-6 text-center sm:text-left transition-all duration-300`}
                >
                    <Link to="/" className="block py-2 sm:py-0 hover:text-gray-200">
                        Home
                    </Link>
                    <Link to="/all_products" className="block py-2 sm:py-0 hover:text-gray-200">
                        Products
                    </Link>
                    <Link to="/about" className="block py-2 sm:py-0 hover:text-gray-200">
                        About
                    </Link>
                    <Link to="/contact" className="block py-2 sm:py-0 hover:text-gray-200">
                        Contact
                    </Link>
                    
                </nav>

                {/* User Actions */}
                <div className="flex items-center space-x-6">
                    {loading && <span>Loading...</span>}
                    {error && <span className="text-red-500">{error}</span>}
                    <Link to="/cart" className="block py-2 sm:py-0 hover:text-gray-200">
                        <div className="flex items-center space-x-2">
                            <FaShoppingCart className="w-6 h-6" />
                            
                        </div>
                    </Link>
                    {user ? (
                        <div className="relative group">
                            <button
                                className="border-2 border-white rounded-full px-3 py-1"
                                aria-label="User Menu"
                            >
                                {user.name ? user.name.charAt(0) : 'U'}
                            </button>
                            <div className="absolute right-0 w-48 bg-white text-black shadow-lg rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                                <div className="px-4 py-2">{user.name}</div>
                                <Logout onLogout={handleLogout} />
                                {user.email === 'rahulkumar202134@gmail.com' && (
                                    <Link
                                        to="/product_listing"
                                        className="block px-4 py-2 text-red-500 hover:bg-gray-200"
                                    >
                                        Listing
                                    </Link>
                                )}
                            </div>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
