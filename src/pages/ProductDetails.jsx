import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { addToCart } from '../store/cartSlice'; // Import addToCart action
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams(); // Get product ID from the URL
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    // State for quantity selection
    const [quantity, setQuantity] = useState(1);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        dispatch(fetchProducts()); // Fetch products if not already available
    }, [dispatch]);

    // Find the product based on the ID
    const product = products.find((p) => p.$id === productId);

    if (loading) return <div className="text-center">Loading product details...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    if (!product) return <div className="text-center">Product not found.</div>;

    // Handle Add to Cart button click
    const handleAddToCart = () => {
        const cartItem = {
            id: product.$id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            quantity, // Use the selected quantity
        };

        dispatch(addToCart(cartItem)); // Dispatch addToCart action with the product

        // Set success message and hide it after 3 seconds
        setSuccessMessage('Product added to cart!');
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    // Handle quantity change
    const handleQuantityChange = (e) => {
        const value = Math.max(1, e.target.value); // Ensure quantity is at least 1
        setQuantity(value);
    };

    return (
        <div className="container mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <img
                        src={product.imageUrl || 'https://via.placeholder.com/300'} // Fallback image
                        alt={product.name}
                        className="w-full h-80 object-cover rounded-md mb-4"
                    />
                </div>
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4">Product Details</h3>
                    <ul className="text-lg text-gray-700">
                        <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className="text-xl font-bold text-green-600 mb-4">Price: ${product.price}</p>

                        {/* Quantity Selection */}
                        <div className="flex items-center mb-4">
                            <label htmlFor="quantity" className="mr-4">Quantity:</label>
                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                onChange={handleQuantityChange}
                                min="1"
                                className="w-16 p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                        >
                            Add to Cart
                        </button>

                        <li><strong>Category:</strong> {product.category}</li>
                        <li><strong>Brand:</strong> {product.brand}</li>
                        <li><strong>Rating:</strong> {product.rating} / 5</li>
                        <li><strong>Stock:</strong> {product.stock} units available</li>
                    </ul>
                </div>
            </div>

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
};

export default ProductDetails;
