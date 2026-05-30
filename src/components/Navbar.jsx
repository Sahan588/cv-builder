import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <nav className="fixed w-full bg-[#4f46e5] text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-black tracking-tighter text-white">
          DESIGN<span className="text-orange-500">HELPER</span>
        </Link>
        <div className="flex items-center space-x-8 font-medium text-sm text-indigo-100">
          <Link to="/" className="hover:text-orange-400 transition-colors">Templates</Link>
          <Link to="/about" className="hover:text-orange-400 transition-colors">About</Link>
          <Link to="/contact" className="px-5 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all">
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;