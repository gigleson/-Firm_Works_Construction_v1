import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-yellow-500">Firm Works</div>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-yellow-500">Home</Link>
        <Link to="/about" className="hover:text-yellow-500">About</Link>
        <Link to="/services" className="hover:text-yellow-500">Services</Link>
      </nav>
    </header>
  );
};

export default Navbar;
