import react, { useState } from "react";
import logo from "../../assests/images/logo.jpg";
import { Link } from "react-router-dom";

const DoctorHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-[#E2F3F2] text-black shadow-md flex item-center justify-between w-full">
        <div
          className={`lg:container lg:mx-auto flex lg:items-center justify-between py-4 px-6 w-[90%] ${
            isMenuOpen ? "flex-col" : "flex-row"
          }`}
        >
          {/* Logo */}
          <Link className="flex items-center lg:justify-center">
            <img src={logo} height={60} width={60} />
            <h2 className="font-semibold text-lg lg:text-xl ">Medically</h2>
          </Link>
          {/*Navigation Menu */}
          <nav
            className={`lg:flex lg:items-center lg:space-x-6 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <Link
              to="/patient/dashboard"
              className=" font-semibold block lg:inline-block mt-4 lg:mt-0"
            >
              Find Doctor
            </Link>
            <Link
              to="/patient/dashboard/show-appointment"
              className="font-semibold block lg:inline-block mt-4 lg:mt-0"
            >
              Show Appointment
            </Link>
            <Link
              to="/"
              className="hovor: bg-[#E2F3F2]  font-semibold block lg:inline-block mt-4 lg:mt-0"
            >
              Profile
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default DoctorHeader;
