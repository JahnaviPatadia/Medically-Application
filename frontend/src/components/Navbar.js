import React from "react";
import logo from "../assests/images/logo.jpg";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-12 py-3 bg-[#E2F3F2] shadow">
      <div className="flex justify-center items-center">
        <img src={logo} height={60} width={60} />
        <p className="font-semibold">Medically</p>
      </div>
      <div className="flex gap-4">
        <div className="font-semibold cursor-pointer hover:text-[#00AEB3]">
          Find a doctor
        </div>

        <div className="font-semibold cursor-pointer hover:text-[#00AEB3]">
          <button className="flex items-center gap-2">
            Specialist <FaChevronDown />
          </button>
          <div
            className="z-10 bg-white hidden
          "
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="font-semibold cursor-pointer hover:text-[#00AEB3]">
          My Appointment
        </div>
      </div>

      <div className="flex gap-4">
        <div>
          <button className="hover:bg-[#033838]  bg-[#005c69] py-2 px-5 text-white font-medium">
            Profile
          </button>
        </div>
        <div>
          <button className="hover:bg-[#033838]  bg-[#005c69] py-2 px-5 text-white font-medium">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
