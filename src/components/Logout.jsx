// src/components/Logout.jsx
import React from 'react';

const Logout = ({ onLogout }) => {
  return (
    <button
      onClick={onLogout}
      className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-200"
    >
      Logout
    </button>
  );
};

export default Logout;
