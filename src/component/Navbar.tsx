import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsClipboard2DataFill } from "react-icons/bs";
import { HiMail,HiOutlineMenuAlt3 } from "react-icons/hi";
import {GrFormClose} from 'react-icons/gr'
import {motion} from 'framer-motion'
import { fadeIn } from "../data/animation";

const Navbar = () => {
  const [hoverStates, setHoverStates] = useState<any>([]);
  const [showNav,setShowNav] = useState<boolean>(false)

  const handleMouseEnter = (index: number) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index: number) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  const renderIcon = (index: number) => {
    const icons = [BsClipboard2DataFill, HiMail]; // Add more icons here if needed
    const Icon = icons[index];

    if (hoverStates[index]) {
      return (
        <span className="transition-all duration-300 ease-in-out mr-1 ">
          <Icon className="opacity-100 " />
        </span>
      );
    }
    return null;
  };

  return (
    <div className="mx-w-[1640px] mx-auto py-4 px-4 md:px-8 lg:px-14 flex justify-between items-center bg-[#fff4eb] ">
      {/* logo */}
      <Link to='/' className="logo">
        <h1 className="text-3xl md:text-4xl font-semibold">yumRun</h1>
      </Link>
      <nav className="flex items-center justify-between text-zinc-800">
        <div className="hidden md:flex justify-between space-x-8  items-center capitalize font-primary font-bold">
          <Link
            to="about"
            className="flex items-center justify-end w-[6rem]"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            {renderIcon(0)}
            <span className="transition-all duration-300 ease-in-out ">
              About us
            </span>
          </Link>
          <a
            href="mailto:roheemohmudashir@gmail.come"
            className="flex items-center justify-end w-[7rem]"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            {renderIcon(1)}
            <span className="transition-all duration-300 ease-in-out ">
              Contact us
            </span>
          </a>
          <Link to="auth/customer/signup">
            <button className="px-4 py-2 items-center flex text-white bg-deeperO rounded-md hover:bg-deepOrange">
              Create Account
            </button>
          </Link>
        </div>

      {/* mobile menu */}
      <div className="md:hidden" onClick={()=>setShowNav(!showNav)}>
      {showNav?<GrFormClose size={27}/>:<HiOutlineMenuAlt3 size={27}/>}
      </div>
      </nav>


      {/* mobile nav */}
     {showNav && (
       <motion.div
       variants={fadeIn("right", 0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.7 }}
        className="absolute top-16 w-full right-0 py-9 space-y-10 items-center text-lg font-semibold flex flex-col shadow-md z-10 bg-[#fff4eb] ">
       <Link
         to="about"
         className="flex items-center justify-end w-[6rem] hover:text-deeperO"
         onMouseEnter={() => handleMouseEnter(0)}
         onMouseLeave={() => handleMouseLeave(0)}
       >
         {renderIcon(0)}
         <span className="transition-all duration-300 ease-in-out ">
           About us
         </span>
       </Link>
       <a
         href="mailto:roheemohmudashir@gmail.come"
         className="flex items-center justify-end w-[7rem] hover:text-deeperO"
         onMouseEnter={() => handleMouseEnter(1)}
         onMouseLeave={() => handleMouseLeave(1)}
       >
         {renderIcon(1)}
         <span className="transition-all duration-300 ease-in-out ">
           Contact us
         </span>
       </a>
     
       <Link to="auth/customer/signup">
            <button className="px-4 py-2 items-center flex text-white bg-deeperO rounded-md hover:bg-deepOrange">
              Create Account
            </button>
          </Link>
     </motion.div>
     )}
    </div>
  );
};

export default Navbar;
