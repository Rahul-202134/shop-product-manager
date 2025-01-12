import React from "react";

const CategoryCard = ({ category, onClick }) => {
  return (
    <div
      onClick={() => onClick(category.name)} // Trigger the onClick function passed as a prop
      className="bg-white p-6 text-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <img
        src={category.image || 'https://via.placeholder.com/300'} // Fallback image
        alt={category.name}
        className="mb-4 mx-auto w-74 h-36 object-cover rounded-md" // Ensure the image fits nicely
      />
      <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
