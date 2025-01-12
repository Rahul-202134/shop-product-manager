import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { Link } from 'react-router-dom'; // Import Link
const AllProducts = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category");
    // Function to truncate the description
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-4">Our Products</h1>
            <p className="text-lg text-center mb-8">Check out the best products we have to offer.</p>

            {loading && <p className="text-center">Loading products...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {products.length === 0 && !loading && (
                    <p className="text-center">No products available.</p>
                )}
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
                            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                                Add to Cart
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default AllProducts;
