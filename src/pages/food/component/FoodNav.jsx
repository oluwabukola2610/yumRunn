import React, {  useState } from "react";
// import { GiShoppingCart } from "react-icons/gi";
import { BsCartCheck, BsFillSaveFill } from "react-icons/bs";
import { AiFillTag, AiOutlineClose } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
const FoodNav = () => {
  const [toggleNav, settoggleNav] = useState(false);
  return (
    <div className="max-w-[1640px] flex justify-between mx-auto items-center py-4 md:px-8 px-3 bg-white top-0 shadow-sm sticky">
      {/* {letf side} */}
      {toggleNav && (
        <div className="bg-black/60 w-full fixed top-0 left-0 z-10 h-screen"></div>
      )}
      {/* sidemenu */}
      <div
        className={
          toggleNav
            ? "fixed h-screen w-[250px] top-0 left-0 bg-white z-10 duration-300"
            : "hidden"
        }
      >
        <AiOutlineClose
          onClick={() => settoggleNav(!toggleNav)}
          size={30}
          className="absolute right-2 top-4"
        />
        <h1 className="text-xl md:text-3xl font-semibold p-4">yumRun</h1>
        <nav>
          <ul className="flex flex-col p-4 text-gray-500">
            <li className="tex-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="tex-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" />
              Favourites
            </li>
            <li className="tex-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="tex-xl py-4 flex">
              <FaWallet size={25} className="mr-4" />
              Wallets
            </li>
            <li className="tex-xl py-4 flex">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="tex-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className="tex-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" />
              invites
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex space-x-3 items-center">
        <BiMenuAltLeft size={35} onClick={() => settoggleNav(!toggleNav)} />
        {/* logo */}
        <Link to="/" className="logo">
          <h1 className="text-xl md:text-2xl font-semibold">yumRun</h1>
        </Link>
       
      </div>

      {/* cartbuttom */}
      <Link to='/cart'>
        <BsCartCheck size={25}  />
      </Link>
    </div>
  );
};

export default FoodNav;
