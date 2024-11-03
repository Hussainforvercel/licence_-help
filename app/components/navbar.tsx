"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F1F1F1] py-4 px-6 flex items-center justify-between">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-yellow-600 font-bold text-lg">Logo</div>
        <span className="text-gray-700 border-l">Instruct with Yourname</span>
      </div>

      {/* Center Section - Nav Links */}
      <div className="hidden md:flex space-x-6 text-gray-700">
        <a href="#" className="hover:text-yellow-600">
          Driving Lessons
        </a>
        <a href="#" className="hover:text-yellow-600">
          Test Packages
        </a>
        <a href="#" className="hover:text-yellow-600">
          Gift Vouchers
        </a>
        <a href="#" className="hover:text-yellow-600">
          Pricing
        </a>
        <a href="#" className="hover:text-yellow-600">
          Support
        </a>
      </div>

      {/* Right Section - Login Buttons */}
      <div className="flex space-x-4 items-center">
        <button className="hidden md:block border border-gray-400 text-gray-700 px-4 py-2 rounded">
          Learner Login
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          Instructor Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
    </nav>
  );
};

export default Navbar;
