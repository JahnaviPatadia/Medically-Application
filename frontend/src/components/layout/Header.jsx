import React from "react";
import logo from "../../assests/images/logo.jpg";

const Header = () => {
  return (
    <header className="bg-[#E2F3F2] text-black shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img src={logo} height={60} width={60} />
          <h2 className="font-semibold">Medically</h2>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex space-x-6">
          <a href="#" className="font-semibold">
            Home
          </a>
          <a href="#" className="font-semibold">
            About
          </a>
          <a href="#" className="font-semibold">
            Services
          </a>
          <a href="#" className="font-semibold">
            Contact
          </a>
        </nav>

        {/* Login and Signup */}
        <div className="flex items-center space-x-4">
          <a href="#" className="font-semibold">
            Login
          </a>
          <a
            href="#"
            className="bg-[#008891] text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className="focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
