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
              value={searchFood}
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
        {foods.length === 0 && <p className="text-3xl font-extrabold justify-center items-center flex ">Item not found!</p>}
                {/* mapping fod data */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {foods.map((items) => (
            <div
              key={items.id}
              
              className=" w-full  overflow-hidden rounded-lg bg-white shadow-md "
            >
              <img
                className="h-[230px] w-full rounded-t-lg object-cover"
                src={items.image}
                alt=""
              />
              <div className="mt-4 px-5 pb-5">
                <h5 className="text-xl font-semibold font-primary tracking-tight text-slate-900">
                  {items.name}
                </h5>
                <div className="mt-2.5 mb-5 flex items-center">
                  <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    5.0
                  </span>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-logo font-bold text-slate-700">
                    ${items.price}
                  </span>
                  <button onClick={()=>addToCart(items.id)} style={{ pointerEvents: "auto" }}
                   className="flex items-center rounded-xl bg-slate-800 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
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
