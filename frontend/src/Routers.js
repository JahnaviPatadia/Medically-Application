import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DoctorList from "./pages/doctor/DoctorList";
import DoctorDetail from "./pages/doctor/DoctorDetail";
import Header from "./components/layout/Header";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import AdminLogin from "./Admin/pages/AdminLogin";
//import AdminLayout from "./Admin/pages/AdminLayout";
import AdminDashboard from "./Admin/pages/dashboard/AdminDashboard";
import Patient from "./Admin/pages/patient/Patient";
import Doctor from "./Admin/pages/doctor/Doctor";
import Dashboard from "./Admin/pages/Dashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/signup" element={<Signup />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/doctor-list" element={<DoctorList />} />
      <Route path="/doctor-list/:id" element={<DoctorDetail />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />}>
        <Route index element={<Dashboard />} />
        <Route path="patient" element={<Patient />} />
        <Route path="doctor" element={<Doctor />} />
      </Route>
    </Routes>
  );
};

export default Routers;
