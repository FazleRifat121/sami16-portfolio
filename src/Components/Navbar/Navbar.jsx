import { Link, NavLink } from "react-router-dom";
import bio from '../../assets/bio.jpg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsFacebook, BsLinkedin} from 'react-icons/bs';
import { useState } from "react";

const Navbar = () => {
    const [show,setShow] = useState(false)
    const navlinks = (
        <>
          <li className="hover:translate-x-2 hover:text-green-400 md:transform-none">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : ""
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="hover:translate-x-2 hover:text-green-400 md:transform-none">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li className="hover:translate-x-2 hover:text-green-400 md:transform-none">
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </>
      );
  return (
    <div className="bg-base-200 md:min-h-screen">
      <div className="md:pt-10 md:ml-32 ml-8">
        {/* logo */}
        <div className="flex justify-between items-center">
        <Link to="/">
          <h1 className="text-4xl font-medium text-green-500">Samiul Haque</h1>
        </Link>
         {/* responsive */}
         <div className="dropdown  bg-base-100 mr-10 md:hidden " onClick={()=>setShow(!show)}>
            {
                show?<AiOutlineClose className="text-3xl font-bold"></AiOutlineClose>:<AiOutlineMenu className="text-3xl font-bold"></AiOutlineMenu>
                
            }
            
            
        </div>
        </div>
        {/* route */}
        <div className={`mt-10 md:flex ${show?"":"hidden"}`}>
          <ul className="space-y-4">{navlinks}</ul>
        </div>
       
      </div>
      {/* hero */}
      <div className={`md:mt-5 md:flex ${show?"":"hidden"}`}>
          <div className="md:ml-20 bg-base-200">
            <div className="hero-content flex-col lg:flex-row items-center">
              <img
                src={bio}
                className="md:max-w-[8rem] max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <p className="text-xs">
                  Hi!, I am S.M Samiul Haque. Currently I am studying at AIUB university in Dhaka,Bangladesh.I am doing B.Sc in CSE.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* links */}
      <div className={`md:mt-5 md:ml-20 md:flex md:flex-col ml-8 ${show?"":"hidden"}`}>
          <h1 className="text-xl">Social Links</h1>
          <hr className="border border-green-400 "/>
          <div className=" py-4 flex gap-2">
            <Link to="https://www.facebook.com/SamiulHaque.Sam16/"><BsFacebook className="text-3xl hover:text-green-400 hover:-translate-y-2"></BsFacebook></Link>
            <Link to="https://www.linkedin.com/in/samiul-haque-181993295/"><BsLinkedin className="text-3xl hover:text-green-400 hover:-translate-y-2"></BsLinkedin></Link>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
