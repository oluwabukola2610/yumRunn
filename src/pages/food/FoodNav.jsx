import React, { useState } from "react";
import { BiMenuAltLeft, BiSearchAlt } from "react-icons/bi";
import { BsCartFill, BsFillSaveFill } from "react-icons/bs";
import { AiOutlineClose, AiFillTag } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdFavorite, MdHelp } from "react-icons/md";

const FoodNav = () => {
  const [toggleNav, settoggleNav] = useState(false);

  return (
    <div className="max-w-[1640px] flex justify-between mx-auto items-center p-4">
      {/* {letf side} */}
      <div className="flex items-center gap-4">
        <div onClick={() => settoggleNav(!toggleNav)}>
          <BiMenuAltLeft size={35} />
        </div>
        <Link to="/" className="logo">
          <h1 className="text-2xl md:text-4xl font-semibold">yumRun</h1>
        </Link>
      </div>

      {/* serchinput */}
      <div className="bg-gray-100 rounded-full w-[150px] md:w-[250px] px-2 flex items-center">
        <BiSearchAlt />
        <input
          type="text"
          placeholder="Search Foods"
          className="bg-transparent p-2 focus:outline-none w-full"
        />
      </div>

      {/* cartbuttom */}
      <BsCartFill size={25} className="mr-2" />

      {/* mobilemenu */}
      {/* overlay */}
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
          <h1 className="text-2xl md:text-3xl font-semibold pt-5 px-2">yumRun</h1>

        {/* side menu nav */}
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
    </div>
  );
};

export default FoodNav;
