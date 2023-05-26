import React, {  useEffect, useState } from "react";

import delivery from "../../../asset/delivery-gdd127f826_640-removebg-preview.png";
const FoodHero = () => {
 // food nav getting user data from login
 const [userInfo, setUserInfo] = useState(null);

 useEffect(() => {
   const storedUserInfo = localStorage.getItem("user");
   if (storedUserInfo) {
     setUserInfo(JSON.parse(storedUserInfo));
   }
 }, []);
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-3">
      <div className="bg-[#f5f1ee] relative p-6 -z-10 ">
        <div className="space-y-6 flex-col justify-center items-center">
          <h1 className=" capitalize text-2xl md:text-3xl font-bold font-serif">
            Hello {''}
            {userInfo && userInfo.name},
          </h1>
          <h2 className="text-xl">
            Get free discount in every <span className="text-deeperO">$20</span>{" "}
            purchase
          </h2>
          <button className="px-4 h-[30px] text-xl font-semibold text-white bg-deeperO rounded-2xl hover:bg-orange-400">
            Learn more
          </button>
        </div>
        
        <img
          src={delivery}
          alt=""
          className="absolute top-0 right-5 hidden md:flex max-w-[300px] h-[250px]"
        />
      </div>
    </div>
  );
};

export default FoodHero;
