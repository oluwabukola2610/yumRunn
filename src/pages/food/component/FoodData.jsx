import React, { useState } from "react";
import { data } from "../../../data/Foodata";
import { BiSearchAlt } from "react-icons/bi";

const FoodData = () => {
  const [foods, setFood] = useState(data);
  const [searchFood, setSearchFood] = useState('');
  const filterCategory = (category) => {
    setFood(data.filter((item) => item.category === category));
  };
  const handleInput = () => {
    if (searchFood === '') return;
    
    const search = data.filter(
      (item) => item.name.toLowerCase().includes(searchFood.toLowerCase())
    );
    setFood(search);
  };
  
  console.log(searchFood)
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-10">
      <div className="flex flex-col space-y-7">
        <h1 className="text-orange-500 font-bold text-4xl text-center">
          Top Rated Menu Items
        </h1>
        {/* serchinput */}
        <div className="bg-gray-100 rounded-full w-[150px] md:w-[300px] px-2 flex items-center justify-center">
          <BiSearchAlt size={30} onClick={handleInput}/>
          <input
            type="text"
            name={searchFood}
            placeholder="Search Foods"
            onChange={(e) => setSearchFood(e.target.value)}
            className="bg-transparent p-2 focus:outline-none w-full"
          />
        </div>
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
              <p className="font-bold text-center pt-3 text-xl text-deeperO">
                {items.name}
              </p>
              <div className="flex py-2 justify-center space-x-12">
                <p className="bg-orange-600 text-white p-1 rounded-2xl">
                  {items.price}
                </p>
                <button className="px-3 py-1 border bg-white/60 hover:border-deeperO rounded-md"> Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodData;
