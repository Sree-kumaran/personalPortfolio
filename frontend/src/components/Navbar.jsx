import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-blue-400 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
