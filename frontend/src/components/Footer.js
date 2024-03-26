import React from "react";
import logo from "../assests/images/logo.jpg";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-12 py-3 bg-[#E2F3F2] shadow shadow">
        <div className="flex justify-center items-center">
          <img src={logo} height={60} width={60} />
          <p className="font-semibold">Medically</p>
        </div>
        <p className="px-10 py-8 text-center bg-[#E2F3F2]">
          Copyright@2024 Medically.All Right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
