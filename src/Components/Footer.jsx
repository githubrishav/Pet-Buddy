import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-300 text-white py-6 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-black">&copy; {new Date().getFullYear()} petBuddy. All rights reserved.</p>
        </div>
        <div className="flex gap-5">
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
