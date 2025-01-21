import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { addToCart } from "../store/cartSlice"; // Import the addToCart action
import { Link } from 'react-router-dom'; // Import Link

function Products() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    // Extract the category from the query parameter
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category");

    // State for success message
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (category) {
            dispatch(fetchProducts(category)); // Fetch products based on the category
        }
    }, [category, dispatch]);

    // Function to truncate text
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    // Function to handle adding products to the cart
    const handleAddToCart = (product) => {
        const cartItem = {
            id: product.$id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            quantity: 1, // Default quantity is 1, you can add a quantity selector if needed
        };
        dispatch(addToCart(cartItem)); // Dispatch addToCart action

        // Set success message and hide it after 3 seconds
        setSuccessMessage('Product added to cart!');
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">
                Products {category && `in ${category}`}
            </h1>

            {/* Display loading state */}
            {loading && <div className="text-center">Loading products...</div>}

            {/* Display error state */}
            {error && <div className="text-center text-red-500">Error: {error}</div>}

            {/* Display products */}
            {!loading && !error && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.$id} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <Link to={`/product/${product.$id}`}> {/* Use Link to navigate */}
                                <img
                                    src={product.imageUrl || 'https://via.placeholder.com/300'} // Fallback image
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{truncateText(product.description, 80)}</p>
                                <p className="text-lg font-bold mb-4">${product.price}</p>
                            </Link>
                            <button
                                onClick={() => handleAddToCart(product)} // Call handleAddToCart with product
                                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Toast Notification */}
            {successMessage && (
                <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 mb-4 animate__animated animate__fadeIn animate__fadeOut animate__delay-2s">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>{successMessage}</span>
                </div>
            )}
        </div>
    );
}

export default Products;
