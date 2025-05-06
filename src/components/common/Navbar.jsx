// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold cursor-none">
          Mohit Malaya Nandy
        </Link>
        
        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/projects" className="hover:text-gray-300 transition">Projects</Link>
          <Link to="/resume" className="hover:text-gray-300 transition">Resume</Link>
          <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button 
            className="text-2xl" 
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white space-y-4 p-4">
          <Link to="/" className="block">Home</Link>
          <Link to="/about" className="block">About</Link>
          <Link to="/projects" className="block">Projects</Link>
          <Link to="/contact" className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;