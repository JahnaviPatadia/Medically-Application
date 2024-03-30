import react from "react";
import logo from "../assests/images/logo.jpg";

const HomeNavbar = () => {
  return (
    <div className="flex justify-between items-center px-12 py-3 bg-[#E2F3F2] shadow">
      <div className="flex justify-center items-center">
        <img src={logo} height={60} width={60} />
        <p className="font-medium">Medically</p>
      </div>
      <div className="flex">
        <p className="pr-40  font-medium cursor-pointer">Home</p>
        <p className=" pr-20 font-medium cursor-pointer">Login</p>
      </div>
    </div>
  );
};

export default HomeNavbar;
