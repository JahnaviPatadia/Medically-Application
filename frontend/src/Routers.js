import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import FindDr from "./pages/FindDr";

const Routers = () => {
  return (
    <Routes>
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/signup" element={<Signup />} />
      <Route path="/FindDr" element={<FindDr />} />
    </Routes>
  );
};

export default Routers;
