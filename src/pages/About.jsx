import React from 'react';
import { FaLightbulb, FaCogs, FaHeadset, FaTruck } from 'react-icons/fa';
import Aboutus from '../assets/images/Aboutus.jpg'
const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-blue-800 mb-6">About GoodLuck Electronics</h2>
          <p className="text-xl text-gray-600">
            At GoodLuck Electronics, we blend innovation, quality, and customer satisfaction to deliver the best electronics and gadgets to your doorstep.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div>
            <img
              src={Aboutus}
              alt="GoodLuck Electronics Store"
              className="rounded-lg shadow-xl"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-blue-800 mb-4">Why Choose GoodLuck Electronics?</h3>
            <p className="text-lg text-gray-700 mb-6">
              We pride ourselves on offering the latest technology at unbeatable prices, ensuring that every customer enjoys a seamless shopping experience.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">
                  <FaLightbulb className="w-6 h-6" />
                </span>
                <span className="text-gray-700 text-lg">
                  Premium products from trusted brands like Apple, Samsung, and Sony.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">
                  <FaCogs className="w-6 h-6" />
                </span>
                <span className="text-gray-700 text-lg">
                  Competitive pricing with seasonal discounts and offers.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">
                  <FaHeadset className="w-6 h-6" />
                </span>
                <span className="text-gray-700 text-lg">
                  24/7 customer support for a hassle-free shopping experience.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Value 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-6">
                <FaLightbulb className="text-3xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Innovation</h4>
              <p className="text-gray-600">
                We constantly bring the latest innovations in technology, ensuring that you have access to cutting-edge gadgets and devices.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-6">
                <FaCogs className="text-3xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Quality</h4>
              <p className="text-gray-600">
                Quality is our top priority. Every product we offer is carefully tested and sourced from reputable brands, ensuring durability and reliability.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-6">
                <FaHeadset className="text-3xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Customer Satisfaction</h4>
              <p className="text-gray-600">
                We are committed to ensuring our customers are happy. Our dedicated customer support team is always ready to assist you.
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-6">
                <FaTruck className="text-3xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Fast Delivery</h4>
              <p className="text-gray-600">
                Enjoy fast and reliable delivery services that bring your products to your doorstep in no time, anywhere you are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
