import React from "react";
import bg from "../../../asset/pexels-julie-aagaard-2097090-removebg-preview.png";
import { BiCurrentLocation, BiSearchAlt } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="mx-auto max-w-[1640px] bg-[#fff4eb]">
      <div className=" py-5 px-4 md:px-8 lg:px-14 lg:py-3 flex flex-col justify-center md:flex-row  md:justify-between">

        <div className="pt-5 md:pt-0 flex flex-col gap-y-5 justify-center max-w-md capitalize text-center md:text-left">
          <h1 className=" text-4xl lg:text-5xl font-primary font-semibold text-deeperO">
            Order food online from your favourite local resturant.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            veritatis consectetur voluptas magnam numquam animi tempore labore.
            Saepe, sint.
          </p>
          <div className="flex justify-center md:justify-start ">
          <div className="bg-deeperO rounded-full w-[300px] md:w-[250px] px-2 flex items-center">
            <BiCurrentLocation />
            <input
              type="text"
              placeholder="enter your location"
              className="bg-transparent placeholder:text-black  p-2 focus:outline-none w-full"
            />
            <BiSearchAlt size={20} className="" />
          </div>
          </div>
        </div>
        <img className="object-cover h-[500px] w-[500px]" alt="" src={bg} />
      </div>
    </section>
  );
};

export default Hero;
