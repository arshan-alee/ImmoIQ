import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-teal-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">ImmoTrust Schweiz AG</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <button className="text-white">LinkedIn</button>
          <button className="text-white">Instagram</button>
          <button className="text-white">Kontakt</button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className=""
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
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <button className="block w-full text-left text-white">LinkedIn</button>
          <button className="block w-full text-left text-white">Instagram</button>
          <button className="block w-full text-left text-white">Kontakt</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
