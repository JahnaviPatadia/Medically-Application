import Routers from "./Routers";
import Header from "./components/layout/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <ToastContainer autoClose={2000} />
      {!location.pathname.startsWith("/admin") && <Header />}
      <Routers />
      {!location.pathname.startsWith("/admin") && <Footer />}
    </>
  );
}

export default App;
