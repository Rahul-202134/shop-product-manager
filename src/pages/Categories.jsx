import React from "react";
import Fan from "../assets/images/fan.jpg";
import Accessories from "../assets/images/accessaries.jpg";
import SmartMobile from "../assets/images/smartMobile.jpg";
import Laptop from "../assets/images/laptop.jpg";
import CategoryCard from "./CategoryCard";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Laptops", image: Laptop },
  { name: "Smart Phones", image: SmartMobile },
  { name: "Fan", image: Fan },
  { name: "Accessories", image: Accessories },
];

function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${categoryName}`); // Navigate with category as a query parameter
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
