import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DoctorList from "./pages/doctor/DoctorList";
import DoctorDetail from "./pages/doctor/DoctorDetail";
import Header from "./components/layout/Header";

const Routers = () => {
  return (
    <Routes>
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/signup" element={<Signup />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/doctor-list" element={<DoctorList />} />
      <Route path="/doctor-list/:id" element={<DoctorDetail />} />
    </Routes>
  );
};

export default Routers;
