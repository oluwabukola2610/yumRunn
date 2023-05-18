import React, { useState } from "react";
import { data } from "../../data/Foodata";
import FoodNav from "./FoodNav";
import { BsCartFill } from "react-icons/bs";

const Food = () => {
  const [foods, setFood] = useState(data);
  const filterCategory = (category) => {
    setFood(data.filter((item) => item.category === category));
  };

  return (
    <>
      <FoodNav />
      <div className="max-w-[1640px] mx-auto px-4 py-10">
        <h1 className="text-orange-500 font-bold text-4xl text-center">
          Top Rated Menu Items
        </h1>
        <div className=" my-8 grid grid-cols-3 gap-6 md:grid-cols-6 md:gap-10 justify-center flex-wrap">
          <button
            onClick={() => setFood(data)}
            className="px-4 bg-deeperO text-black border-orange-600 rounded-xl hover:bg-orange-600 hover:text-white"
          >
            All
          </button>
          <button
            onClick={() => filterCategory("burger")}
            className="px-4 bg-deeperO text-black border-orange-600 rounded-xl hover:bg-orange-600 hover:text-white"
          >
            Burgers
          </button>
          <button
            onClick={() => filterCategory("pizza")}
            className="px-4 bg-deeperO text-black border-orange-600 rounded-xl hover:bg-orange-600 hover:text-white"
          >
            Pizza
          </button>
          <button
            onClick={() => filterCategory("african")}
            className="px-4 bg-deeperO text-black border-orange-600 rounded-xl hover:bg-orange-600 hover:text-white"
          >
            African Food
          </button>
          <button
            onClick={() => filterCategory("salad")}
            className="px-4 bg-deeperO text-black border-orange-600 rounded-xl hover:bg-orange-600 hover:text-white"
          >
            Salads
          </button>
          <button
            onClick={() => filterCategory("chicken")}
            className="px-4 bg-deeperO text-black border-orange-600 rounded-xl hover:bg-orange-600 hover:text-white"
          >
            Chicken
          </button>
        </div>

        {/* mapping fod data */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foods.map((items) => (
            <div
              className="border shadow-lg rounded-lg hover:scale-105 duration-500 "
              key={items.id}
            >
              <img
                src={items.image}
                alt=""
                className="h-[200px] object-cover rounded-t-lg w-full"
              />
              <p className="font-bold text-center pt-3">{items.name}</p>

              <div className="flex py-4 px-4 justify-between">
                <span className="bg-orange-600 text-white p-1 rounded-full">
                  {items.price}
                </span>
                <BsCartFill size={25} className="mr-2" />

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Food;
