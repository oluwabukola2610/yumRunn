import React from "react";
import delivery from "../../../asset/delivery-partner.jpg";

const Order = () => {
  return (
    <section className="w-full flex flex-col justify-between my-16">
    <div className="m-auto max-w-[1240px] flex flex-col md:flex-row gap-x-20">
        <div className="relative border-solid border-2 border-[#f8dcc5] p-2 rounded-2xl h-max  border-r-[12px]">
          <img
            className="object-cover h-[400px] w-[420px] rounded-2xl"
            alt=""
            src={delivery}
          />
        </div>
        <div className=" pt-5 md:pt-0 flex flex-col gap-y-5 justify-center max-w-lg capitalize text-center md:text-left">
        <h1 className=" text-4xl font-secondary font-semibold text-deeperO">
            Become A Food Delivery Partner Enjoy flexible working
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            veritatis consectetur voluptas magnam numquam animi tempore labore.
            Saepe, sint.
          </p>
          
          <div className="flex justify-center md:justify-start ">
            <button className="px-4 h-[40px] text-white font-bold bg-deeperO rounded-2xl hover:bg-deeperO/80">
            Sign up as a rider
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
