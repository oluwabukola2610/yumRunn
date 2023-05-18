import React from "react";
import { MdFastfood } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { RxLapTimer } from "react-icons/rx";

const Service = () => {
  const serviceCard = [
    {
      id: 1,
      text: "Wide selection of restaurants",
      descrip:
        "lorem sit amet consectetur adipisicing elit. Corrupti olestiae possimus dolore placeat ipsum aperia",
      icon: <BiFoodMenu size={50} />,
    },
    {
      id: 2,
      text: "Easy ordering processing",
      descrip:
        "lorem sit amet consectetur adipisicing elit. Corrupti olestiae possimus dolore placeat ipsum aperia",
      icon: <MdFastfood size={50} />,
    },
    {
      id: 3,
      text: "Fast delivery within 20 min",
      descrip:
        "lorem sit amet consectetur adipisicing elit. Corrupti olestiae possimus dolore placeat ipsum aperia",
      icon: <RxLapTimer size={50} />,
    },
  ];
  return (
    <section className="mx-auto max-w-[1640px]  ">
      <div className="p-4 md:px-8 lg:px-14 lg:py-5 flex flex-col space-y-12">

        <div className=" relative flex flex-col justify-center items-center text-center text-zinc-700 ">
        <div className="blur w-[20rem] h-[15rem] left-[5%] "></div>

          <h1 className="text-4xl md:text-5xl font-semibold font-secondary pb-4 text-deeperO ">
            Our service
          </h1>
          <p className="max-w-lg">
            Foodtime is an online food delivery service. Fast delivery, deals &
            discounts and the best choice of restaurants. Browse menu & order
            online! 2000+ restaurants. Online payment options.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row gap-8">
          {serviceCard.map((data) => (
            <div
              key={data.id}
              className="flex flex-col space-y-5 p-4 text-center md:text-left bg-white/80 shadow-md rounded-md hover:bg-deeperO duration-300 transition-all hover:text-white"
            >
              <div className="flex justify-center">{data.icon}</div>
              <h2 className="text-xl md:text-2xl font-semibold">{data.text}</h2>
              <p>{data.descrip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
