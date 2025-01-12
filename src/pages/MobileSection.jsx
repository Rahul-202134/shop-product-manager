import React from 'react';
import mobile from '../assets/images/mobile.jpg'
const ProductSection = () => {
    return (
        <>
        <div className="bg-gray-50 p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Left Side: Product Image */}
                <div className="sm:w-1/2">
                    <img
                        src={mobile}
                        alt="Product"
                        className="w-full h-72 object-cover rounded-md"
                    />
                </div>

                {/* Right Side: Product Content */}
                <div className="sm:w-1/2 sm:pl-6 mt-4 sm:mt-0">
                    <h3 className="text-xl font-semibold text-gray-800">
                        Smart Phones 2025
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                        A sleek and stylish smart Phones with advanced features.
                    </p>
                    <p className="text-lg font-semibold text-gray-700 mt-2">
                       Starting Price- $249.99
                    </p>
                    <button className="w-24 mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
        
      
        </>
        

    );
};

export default ProductSection;
