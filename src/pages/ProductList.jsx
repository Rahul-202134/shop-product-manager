import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { databases } from '../services/appwrite';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await databases.listDocuments('products'); // Replace 'products' with your collection ID
        setProducts(response.documents);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.$id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
