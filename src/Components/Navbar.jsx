import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white sticky top-0 left-0 z-10 w-full">
      <div className="flex justify-between items-center px-4 py-6">
        <div className="text-lg font-bold">PetBuddy</div>
        <div className="hidden md:flex gap-12">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
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
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-black text-white`}
      >
        <Link to="/" className=" px-4 py-2" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" className="block px-4 py-2" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/contact" className="block px-4 py-2" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
