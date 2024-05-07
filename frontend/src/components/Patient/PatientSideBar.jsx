import React, { useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { FiHome, FiSettings, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { FaRegCircleUser, FaAddressCard, FaKey } from "react-icons/fa6";
import { MdNotificationsActive } from "react-icons/md";
//import Loader from "../Loader";
import { TbArrowNarrowLeft } from "react-icons/tb";
import logo from "../../assests/images/logo.jpg";
import { IoPerson } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";
import { MdSpaceDashboard } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";

const PatientSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const handleLogout = () => {
    <h1>This is dashboard</h1>;
  };

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };
  console.log(pathname);
  return (
    <>
      <div className="md:site-container flex justify-between items-center ">
        <button
          className="p-4 text-white bg-darkgray overflow-y-auto md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {isToggled && (
        <div className="absolute right-2">
          <p>Edit Profile</p>
          <p>Change Password</p>
        </div>
      )}
      <div
        className={`fixed  top-0 left-0 z-30 h-full w-90 bg-darkgray text-white overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <button
          className="p-3 text-white md:hidden absolute top-0 left-0" // This button is only visible on small screens
          onClick={() => setIsOpen(false)} // Close the sidebar
        >
          <FiX size={24} />
        </button>
        <div className="bg-[#E2F3F2]  h-full">
          {/* <h1 className="text-2xl font-semibold text-white text-center p-3"> */}
          <div className="flex ">
            <img
              src={logo}
              className="logo mt-4 mx-auto ml-2"
              width={50}
              height={30}
              alt="logo"
            />
            <p className="mt-8 mr-24 text-base font-semibold text-2xl text-black">
              Medically
            </p>
          </div>

          {/* </h1> */}
          <div className="">
            <nav className="mt-6">
              <ul className="flex flex-col gap-1">
                <li>
                  <NavLink
                    end
                    to="/patient/dashboard"
                    className={`flex text-black items-center py-3 px-6 transition duration-200 ${
                      pathname === "/patient/dashboard"
                        ? "bg-[#005c69] text-white"
                        : ""
                    } hover:bg-[#005c69] hover:text-white text-lg`}
                    onClick={() => setIsOpen(false)}
                  >
                    <MdSpaceDashboard className="mr-4 size={26}" />
                    <p className="text-base">Find Doctor </p>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/patient/dashboard/edit-profile"
                    className={`flex  text-black items-center py-3 px-6 transition duration-200 ${
                      pathname?.split("/")[3] === "edit-profile"
                        ? "bg-[#005c69] text-white"
                        : ""
                    } hover:bg-[#005c69] hover:text-white  text-lg`}
                    onClick={() => setIsOpen(false)}
                  >
                    <IoPerson className="mr-4 size={26}" />

                    <p className="text-base">Edit Profile</p>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/patient/dashboard/change-password"
                    className={`flex text-black items-center py-3 px-6 transition duration-200 ${
                      pathname?.split("/")[3] === "change-password"
                        ? "bg-[#005c69] text-white"
                        : ""
                    } hover:bg-[#005c69] hover:text-white text-lg`}
                    onClick={() => setIsOpen(false)}
                  >
                    <IoPerson className="mr-4 size={26}" />

                    <p className="text-base">Change Password</p>
                  </NavLink>
                </li>

                <li>
                  <Link
                    to="/auth/login"
                    className="flex text-black items-center py-3 px-6 transition duration-200 hover:bg-[#005c69] hover:text-white  text-lg"
                    onClick={handleLogout}
                  >
                    <RiLogoutBoxRFill className="mr-4 size={26}" />
                    <p className="text-base">Logout</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientSideBar;
