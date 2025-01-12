import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { Link } from 'react-router-dom'; // Import Link
function Products() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    // Extract the category from the query parameter
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category");

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

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">
                Products {category && `in ${category}`}
            </h1>

            {/* Display loading state */}
            {loading && <p>Loading products...</p>}

            {/* Display error state */}
            {error && <p className="text-red-500">Error: {error}</p>}

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
                            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Products;
