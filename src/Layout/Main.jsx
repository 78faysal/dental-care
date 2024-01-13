import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="min-h-screen max-sm:px-5 max-md:px-10">
        <Outlet />
      </div>
      <Footer />
      <div className="h-60"></div>
    </div>
  );
};

export default Main;
