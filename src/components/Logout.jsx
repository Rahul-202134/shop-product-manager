// src/components/Logout.jsx
import React from 'react';

const Logout = ({ onLogout }) => {
  return (
    <button
      onClick={onLogout}
      className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default Logout;
