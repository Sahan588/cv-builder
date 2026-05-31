import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#4f46e5] text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
       {/* Logo and Text */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/Cv_Design_Helper_logo_web.png" 
            alt="Design Helper Logo" 
            className="h-10 w-auto object-contain" 
          />
          <span className="text-xl font-black tracking-tighter text-white"> DESIGN
          <span className="text-orange-500 ml-1">HELPER</span>
          </span>
          </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-indigo-100">
          <Link to="/" className="hover:text-orange-400 transition-colors">Templates</Link>
          <Link to="/about" className="hover:text-orange-400 transition-colors">About</Link>
          <Link to="/contact" className="px-5 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all">
            Hire Me
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#4338ca] px-6 py-6 flex flex-col space-y-4 font-medium animate-in slide-in-from-top-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-orange-400">Templates</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-orange-400">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="px-5 py-2 bg-orange-500 text-white rounded-full w-max">
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;