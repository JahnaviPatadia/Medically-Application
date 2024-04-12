import Routers from "./Routers";
import Header from "./components/layout/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Header />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
