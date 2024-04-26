//import { useSelector } from "react-redux";
import Sidebar from "../../components/layout/SideBar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full bg-darkgray md:bg-transparent">
        <Sidebar />
      </div>

      <div className="site-container w-full ml-0 md:ml-40 overflow-x-hidden ">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
