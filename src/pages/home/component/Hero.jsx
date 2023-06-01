import React from "react";
import bg from "../../../asset/pexels-julie-aagaard-2097090-removebg-preview.png";
import { BiCurrentLocation } from "react-icons/bi";

const Hero = () => {
  return (
    <section className=" w-full md:h-screen flex flex-col justify-between bg-[#fff4eb] py-12">
      <div className="m-auto max-w-[1240px] grid md:grid-cols-2 gap-x-10  ">
        <div className="p-5 md:pt-0 flex flex-col gap-y-8 justify-center max-w-lg capitalize text-center md:text-left">
          <h1 className=" text-4xl lg:text-5xl font-secondary font-semibold text-deeperO">
            Order food online from your favourite local resturant.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            veritatis consectetur voluptas magnam numquam animi tempore labore.
            Saepe, sint.
          </p>
          <div className="flex justify-center md:justify-start ">
            <div className="bg-deeperO/80 rounded-full w-[300px] md:w-[250px] px-2  justify-between flex items-center">
              <BiCurrentLocation />
              <input
                type="text"
                placeholder="enter your location"
                className="bg-transparent placeholder:text-black/50 font-bold  p-2 focus:outline-none w-full"
              />
            </div>
          </div>
        </div>
        <img className="object-cover h-[500px] w-[500px]" alt="" src={bg} />
      </div>
    </section>
  );
};

export default Hero;
