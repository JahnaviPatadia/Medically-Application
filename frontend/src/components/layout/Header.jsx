import React, { useState } from "react";
import logo from "../../assests/images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-[#E2F3F2] text-black shadow-md flex items-center justify-between w-full">
        <div
          className={`lg:container lg:mx-auto flex lg:items-center justify-between py-4 px-6 w-[90%] ${
            isMenuOpen ? "flex-col" : "flex-row"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center lg:justify-center">
            <img src={logo} height={60} width={60} />
            <h2 className="font-semibold text-lg lg:text-xl">Medically</h2>
          </Link>
          {/* Navigation Menu */}
          <nav
            className={`lg:flex lg:items-center lg:space-x-6 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <Link
              to="/"
              className="font-semibold block lg:inline-block mt-4 lg:mt-0"
            >
              Home
            </Link>
            <Link
              to="/doctor-list"
              className="font-semibold block lg:inline-block mt-4 lg:mt-0"
            >
              Find Doctor
            </Link>
            <Link
              to="/contactus"
              className="font-semibold block lg:inline-block mt-4 lg:mt-0"
            >
              Contact Us
            </Link>
            <Link
              to="/aboutus"
              className="font-semibold block lg:inline-block mt-4 lg:mt-0"
            >
              About
            </Link>
          </nav>
          <Link
            to="auth/login"
            className={`${
              isMenuOpen ? "" : "hidden"
            } font-semibold block lg:inline-block mt-4 lg:mt-0`}
          >
            Create an Account / Login
          </Link>
          {/* Mobile Menu Button */}
        </div>
        <div className="lg:hidden py-4 px-6">
          <button className="focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
