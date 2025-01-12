import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams(); // Get product ID from the URL
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts()); // Fetch products if not already available
    }, [dispatch]);

    // Find the product based on the ID
    const product = products.find((p) => p.$id === productId);

    if (loading) return <p className="text-center">Loading product details...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    if (!product) return <p className="text-center">Product not found.</p>;

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
                        <p className="text-xl font-bold text-green-600 mb-4">Price- ${product.price}</p>

                        <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                            Add to Cart
                        </button>
                        <li><strong>Category:</strong> {product.category}</li>
                        <li><strong>Brand:</strong> {product.brand}</li>
                        <li><strong>Rating:</strong> {product.rating} / 5</li>
                        <li><strong>Stock:</strong> {product.stock} units available</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
