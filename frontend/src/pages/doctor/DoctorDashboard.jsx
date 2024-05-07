import react from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Admin/pages/doctor/Header";

import DoctorSidebar from "../../components/Doctor/DoctorSidebar";

const DoctorDashboard = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full bg-darkgray md:bg-transparent">
          <DoctorSidebar />
        </div>

        <div className="site-container w-full ml-0 md:ml-40 overflow-x-hidden ">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
