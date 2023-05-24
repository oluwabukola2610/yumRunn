import React, { useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const FoodNav = () => {
  const [toggleNav, settoggleNav] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("user");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);
  return (
    <div className="max-w-[1640px] flex justify-between mx-auto items-center py-4 md:px-8 px-3">
      {/* {letf side} */}
      <div className="flex space-x-3 items-center">
        <Link to="/" className="logo">
          <h1 className="text-2xl md:text-4xl font-semibold">yumRun</h1>
        </Link>
       <div className="flex gap-1 items-center">
       <BiUser size={20} className=""/>
        {userInfo && (
          <p className="textt-xs md:text-xl ">Welcome, {userInfo.name}!</p>
        )}
       </div>
      </div>

      {/* cartbuttom */}
      <div onClick={() => settoggleNav(!toggleNav)}>
        <BsCartCheck size={25} className="mr-2 items-center" />
      </div>
      {/* mobilemenu */}
      {/* overlay */}
      {toggleNav && (
        <div
          className="bg-black/60 w-full fixed top-0 left-0 z-10 h-screen"
          onClick={() => settoggleNav(!toggleNav)}
        ></div>
      )}
      {/* sidemenu */}
      <div
        className={
          toggleNav
            ? "fixed h-screen w-full md:w-[450px] top-0 right-0 bg-white z-10 duration-300"
            : "hidden"
        }
      >
        <AiOutlineClose
          onClick={() => settoggleNav(!toggleNav)}
          size={30}
          className="absolute right-2 top-4"
        />
        <h1 className="text-2xl md:text-3xl font-semibold pt-5 px-2 ">
          Your Carts
        </h1>
        <div>
          <GiShoppingCart
            size={350}
            className="flex justify-center items-center m-6"
          />
          <div className="text-center">
            <p className="text-xl">Your cart is empty!</p>
            <p
              onClick={() => settoggleNav(!toggleNav)}
              className="text-deeperO text-md"
            >
              Order now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodNav;
