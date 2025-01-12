const ProductCard = ({ product }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-lg font-bold mt-2">${product.price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  