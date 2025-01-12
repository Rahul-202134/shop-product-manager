import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts, addProduct } from '../store/productSlice';
import { databases, storage } from '../services/appwrite'; // Import Appwrite storage

const ProductListing = () => {
    const [error, setError] = useState('');
    const [imageFile, setImageFile] = useState(null); // State for file input
    const dispatch = useDispatch();

    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        featuredImage: '',
        category: '', // Add category state
    });

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();

        let imageUrl = newProduct.featuredImage; // Default to the inputted URL if no file is selected

        if (imageFile) {
            try {
                // Upload image to Appwrite storage
                const fileUploaded = await storage.createFile(
                    '6782b3e700106aad29bb', // Replace with your Appwrite bucket ID
                    'unique()', // Optional: You can provide a unique file ID or leave it empty for auto-generation
                    imageFile
                );
                imageUrl = fileUploaded.$id; // Use the file's ID as the URL (you can fetch the public URL later)
            } catch (err) {
                console.error('Error uploading file:', err);
                setError('Failed to upload image. Please try again.');
                return;
            }
        }

        try {
            const response = await databases.createDocument(
                '6782b2ce00367b9978e9', // Your Appwrite Database ID
                '6782b3150028a886daf9', // Your Appwrite Collection ID
                'unique()', // Optional: Provide a unique ID or leave it empty for auto-generation
                {
                    name: newProduct.name,
                    description: newProduct.description,
                    price: parseFloat(newProduct.price),
                    featuredImage: imageUrl, // Use the uploaded image URL or the inputted one
                    category: newProduct.category, // Include category in the product
                }
            );
            dispatch(addProduct(response)); // Update Redux store
            setNewProduct({ name: '', description: '', price: '', featuredImage: '', category: '' });
            alert('Product Listed Successfully');
            setImageFile(null); // Clear the file input
        } catch (err) {
            alert('Product not Listed Successfully');
            console.error("Error adding product:", err);
            setError('Failed to add product. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-6">Product Listing</h1>

            <div className="mb-8 w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleAddProduct} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={newProduct.name}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter product name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            name="description"
                            value={newProduct.description}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter product description"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={newProduct.price}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter product price"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Category</label>
                        <select
                            name="category"
                            value={newProduct.category}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        >
                            <option value="">Select Category</option>
                            <option value="Smart Phones">Smart Phones</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Fan">Fan</option>
                            <option value="Fan">Accessories</option>
                            <option value="Other Electronics Devices">Other Electronics Devices</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Image</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Add Product
                    </button>
                </form>
            </div>

        </div>
    );
};

export default ProductListing;
