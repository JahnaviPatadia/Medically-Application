import React from "react";
import PatientSideBar from "../../components/Patient/PatientSideBar";
import { Outlet } from "react-router-dom";
import Header from "../../Admin/pages/doctor/Header";

const PatientDashboard = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full bg-darkgray md:bg-transparent">
          <PatientSideBar />
        </div>

        <div className="site-container w-full ml-0 md:ml-40 overflow-x-hidden ">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PatientDashboard;
