import React, { useContext } from "react";
import { data } from "../../../data/Foodata";
import { BiSearchAlt } from "react-icons/bi";
import { contextProvider } from "../../../context/FoodContext";

const FoodData = () => {
  const {
    handleInput,
    filterCategory,
    setSearchFood,
    foods,
    setFood,
    searchFood,
    addToCart,
    displayCart,
  } = useContext(contextProvider);
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-10">
      <div className="flex flex-col space-y-7">
        <h1 className="text-orange-500 font-bold text-3xl md:text-4xl text-center">
          Top Rated Menu Items
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center py-3 md:py-5 space-y-8 md:space-y-0">
          {/* serchinput */}
          <div className="bg-gray-100 rounded-full w-[350px] px-4 flex items-center justify-center">
            <input
              type="text"
              name={searchFood}
              placeholder="Search Foods"
              onChange={(e) => setSearchFood(e.target.value)}
              className="bg-transparent p-2 focus:outline-none w-full placeholder:text-black/60"
            />
            <BiSearchAlt
              size={23}
              onClick={handleInput}
              className="text-black/60"
            />
          </div>

          <div className="gap-4 item-center flex flex-wrap justify-center ">
            <button
              onClick={() => setFood(data)}
              className="px-4 bg-deeperO rounded-xl hover:bg-orange-400 text-white"
            >
              All
            </button>
            <button
              onClick={() => filterCategory("burger")}
              className="px-4 bg-deeperO rounded-xl hover:bg-orange-400 text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterCategory("pizza")}
              className="px-4 bg-deeperO rounded-xl hover:bg-orange-400 text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterCategory("african")}
              className="px-4 bg-deeperO rounded-xl hover:bg-orange-400 text-white"
            >
              African Food
            </button>
            <button
              onClick={() => filterCategory("salad")}
              className="px-4 bg-deeperO rounded-xl hover:bg-orange-400 text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterCategory("chicken")}
              className="px-4 bg-deeperO rounded-xl hover:bg-orange-400 text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* mapping fod data */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foods.map((items) => (
            <div
              key={items.id}
              className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
            >
              <div
                className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                style={{ backgroundImage: `url(${items.image})` }}
              ></div>

              <div className="w-56 -mt-10 overflow-hidden rounded-2xl shadow-lg md:w-64 bg-black/70">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                  {items.name}
                </h3>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-900/20 ">
                  <span className="font-bold text-gray-800 dark:text-gray-200">
                    {" "}
                    $ {items.price}
                  </span>
                  <button
                    onClick={() => addToCart(items.id)}
                    className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-deeperO rounded hover:bg-orange-400 focus:outline-none"
                  >
                    Add to cart {''}
                    {displayCart[items.id] > 0 && <>({displayCart[items.id]})</>}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodData;
