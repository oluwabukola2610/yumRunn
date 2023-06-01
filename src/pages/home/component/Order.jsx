import React from 'react'
import delivery from "../../../asset/deliveryy.png";

const Order = () => {
  return (
    <section className="w-full md:h-screen flex flex-col justify-between ">
    <div className="m-auto max-w-[1240px] flex flex-col-reverse md:flex-row md:gap-x-10 ">
        <img className="object-cover h-[500px] w-[500px] " alt="" src={delivery} />
        <div className="relative p-5 flex flex-col gap-y-5 justify-center max-w-lg capitalize  text-center md:text-left">
        <div className="blur w-[12rem] h-[10rem] left-[70%] "></div>

          <h1 className=" text-4xl lg:text-5xl font-secondary font-semibold text-deeperO">
            We deliver the taste, as you want
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            veritatis consectetur voluptas magnam numquam animi tempore labore.
            Saepe, sint.
          </p>
          <p className="text-md font-primary ">
            we care more about your satisfaction
          </p>
          <div className="flex justify-center md:justify-start ">
            <button className="px-4 font-bold h-[35px] text-white bg-deeperO rounded-2xl hover:bg-deeperO/80">
              Explore Our Service
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Order