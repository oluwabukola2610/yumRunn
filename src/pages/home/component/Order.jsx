import React from 'react'
import delivery from "../../../asset/deliveryy.png";

const Order = () => {
  return (
    <section className="mx-auto max-w-[1640px]  ">
      <div className="p-4 md:px-8 lg:px-14 lg:py-5  flex flex-col-reverse justify-center md:flex-row  md:justify-between">
        <img className="object-cover h-[500px] w-[500px] " alt="" src={delivery} />
        <div className="relative pt-5 md:pt-0 flex flex-col gap-y-5 justify-center max-w-md capitalize text-center md:text-left">
        <div className="blur w-[12rem] h-[10rem] left-[70%] "></div>

          <h1 className=" text-4xl lg:text-5xl font-primary font-semibold text-deeperO">
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
            <button className="px-4 h-[35px] text-white bg-deeperO rounded-lg hover:bg-deepOrange">
              Explore Our Service
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Order