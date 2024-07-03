import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-700 hover:text-gray-900">
          <a href="#">Lorem Ipsum</a>
        </div>
        <div className="flex space-x-8">
          <a
            href="#"
            onClick={() => navigate("/")}
            className="text-gray-700 hover:text-gray-900"
          >
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
