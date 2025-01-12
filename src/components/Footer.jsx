import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">About GoodLuck Electronics</h3>
            <p className="text-sm">
              Your trusted destination for top-quality electronics and accessories. We offer unbeatable deals, fast delivery, and exceptional customer service.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="/shipping" className="hover:text-yellow-300">Shipping Policy</a>
              </li>
              <li>
                <a href="/returns" className="hover:text-yellow-300">Return Policy</a>
              </li>
              <li>
                <a href="/support" className="hover:text-yellow-300">Support Center</a>
              </li>
              <li>
                <a href="/warranty" className="hover:text-yellow-300">Warranty Info</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm mb-4">
              Stay updated on the latest deals, products, and promotions.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-gray-800 rounded mb-2"
              />
              <button className="w-full px-4 py-2 bg-yellow-500 text-gray-800 font-bold rounded hover:bg-yellow-600">
                Subscribe
              </button>
            </form>
          </div>

          {/* Brands We Carry */}
          <div>
            <h3 className="text-lg font-bold mb-4">Brands We Carry</h3>
            <ul className="space-y-2">
              <li>Samsung</li>
              <li>Apple</li>
              <li>Sony</li>
              <li>LG</li>
              <li>Panasonic</li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-6 mt-10">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
            <FaLinkedinIn size={20} />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GoodLuck Electronics. All rights reserved.</p>
          <p className="mt-2">
            Designed with ❤️ by GoodLuck Electronics Team. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
