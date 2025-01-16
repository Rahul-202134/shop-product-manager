import React from 'react';
import { FaMobileAlt, FaLaptop, FaTv, FaHeadphones } from 'react-icons/fa';

function Hero() {
    return (
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white min-h-[90vh] flex items-center justify-center z-10">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-opacity-90"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                {/* Title and Tagline */}
                <h1 className="text-5xl font-extrabold mt-24">
                    Welcome to <span className="text-yellow-300">GoodLuck Electronics</span>
                </h1>
                <p className="text-lg mb-6">
                    Your one-stop shop for the latest gadgets, top-notch appliances, and unbeatable deals.
                </p>

                {/* Call-to-Action */}
                <button className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300 mb-8">
                    Explore Now
                </button>

                {/* Highlights Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    <div className="flex flex-col items-center">
                        <FaMobileAlt size={50} className="mb-3 text-yellow-300" />
                        <h3 className="text-xl font-semibold">Smartphones</h3>
                        <p className="text-sm text-gray-300">
                            Discover the latest flagship and budget-friendly phones.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaLaptop size={50} className="mb-3 text-yellow-300" />
                        <h3 className="text-xl font-semibold">Laptops</h3>
                        <p className="text-sm text-gray-300">
                            High-performance laptops for work, gaming, and more.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaTv size={50} className="mb-3 text-yellow-300" />
                        <h3 className="text-xl font-semibold">Televisions</h3>
                        <p className="text-sm text-gray-300">
                            Ultra-HD TVs with immersive displays and sound.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaHeadphones size={50} className="mb-3 text-yellow-300" />
                        <h3 className="text-xl font-semibold">Accessories</h3>
                        <p className="text-sm text-gray-300">
                            Premium headphones, smartwatches, and more.
                        </p>
                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="mt-16">
                    <blockquote className="text-xl italic text-gray-200">
                        "GoodLuck Electronics offers amazing deals and fast delivery. My go-to shop for gadgets!"
                    </blockquote>
                    <p className="mt-2 text-sm text-gray-400 pb-8">— A Happy Customer</p>
                </div>

                {/* Decorative Shapes */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-700 rounded-full blur-xl opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-300 rounded-full blur-2xl opacity-30"></div>
            </div>
        </div>
    );
}

export default Hero;
