import React from "react";

const testimonials = [
  {
    text: "The best electronics store! I found everything I needed, and the quality is unmatched.",
    name: "John Doe",
    image: "https://via.placeholder.com/50", // Placeholder for customer image
  },
  {
    text: "Fast delivery and excellent customer service. Highly recommended!",
    name: "Jane Smith",
    image: "https://via.placeholder.com/50", // Placeholder for customer image
  },
  {
    text: "Amazing products and prices. I'll definitely shop here again!",
    name: "Emily Johnson",
    image: "https://via.placeholder.com/50", // Placeholder for customer image
  },
 
];

function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
