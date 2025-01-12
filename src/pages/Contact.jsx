// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-lg text-center mb-8">We'd love to hear from you! Get in touch with us.</p>
      <div className="max-w-lg mx-auto">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Your Email</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg" rows="4" placeholder="Your message"></textarea>
          </div>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
