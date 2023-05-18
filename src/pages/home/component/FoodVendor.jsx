import React from "react";
import delivery from "../../../asset/delivery-partner.jpg";

const Order = () => {
  return (
    <section className="mx-auto max-w-[1640px] pt-6 ">
      <div className="p-4 md:px-8 lg:px-14 lg:py-8 flex flex-col justify-center md:flex-row  md:justify-between">
        <div className="relative border-solid border-2 border-[#f8dcc5] p-4 rounded-2xl h-max  border-r-[12px]">
          <img
            className="object-cover h-[400px] w-[420px] rounded-2xl"
            alt=""
            src={delivery}
          />
        </div>
        <div className=" pt-5 md:pt-0 flex flex-col gap-y-5 justify-center max-w-md capitalize text-center md:text-left">
          <h1 className=" text-3xl lg:text-4xl font-primary font-semibold text-deeperO">
            Become A Food Delivery Partner Enjoy flexible working
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            veritatis consectetur voluptas magnam numquam animi tempore labore.
            Saepe, sint.
          </p>
          
          <div className="flex justify-center md:justify-start ">
            <button className="px-4 h-[40px] text-white bg-deeperO rounded-lg hover:bg-deepOrange">
            Sign up as a rider
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
