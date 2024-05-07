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
import PatientDashboard from "./pages/patient/PatientDashboard";
import ShowAppointment from "./pages/patient/ShowAppointment";
import PatientRecords from "./pages/doctor/PatientRecords";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import EditPatientProfile from "./pages/patient/EditPatientProfile";
import ChangePassword from "./pages/patient/ChangePassword";

const Routers = () => {
  return (
    <Routes>
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/signup" element={<Signup />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/doctor-list" element={<DoctorList />} />
      <Route path="/doctor-list/:id" element={<DoctorDetail />} />
      <Route path="/doctor/dashboard" element={<DoctorDashboard />}>
        <Route index element={<ShowAppointment />} />
        <Route path="patient-records" element={<PatientRecords />} />
      </Route>
      <Route path="/patient/dashboard" element={<PatientDashboard />}>
        <Route index element={<DoctorList />} />
        <Route path="show-appointment" element={<ShowAppointment />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="edit-profile" element={<EditPatientProfile />} />
      </Route>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />}>
        <Route index element={<Dashboard />} />
        <Route path="patient" element={<Patient />} />
        <Route path="doctor" element={<Doctor />} />;
      </Route>
    </Routes>
  );
};

export default Routers;
