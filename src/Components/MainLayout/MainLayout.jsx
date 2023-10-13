import { Outlet } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Navbar></Navbar>
        </div>
        <div className="md:w-2/3" data-aos="fade-down" data-aos-duration="1000">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
