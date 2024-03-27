import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import FindDr from "./pages/FindDr";
import DoctorDetails from "./pages/DoctorDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeNavbar from "./components/HomeNavbar";

const Routers = () => {
  const location = useLocation();
  const isLogin =
    location.pathname === "/auth/login" || location.pathname === "/auth/signup";
  return (
    <div>
      {isLogin ? (
        <Routes>
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/signup" element={<Signup />} />
        </Routes>
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/doctor-list" element={<FindDr />} />
            <Route path="/doctor-list/:id" element={<DoctorDetails />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Routers;
