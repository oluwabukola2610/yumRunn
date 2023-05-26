import React, { createContext, useState } from "react";
import { data } from "../data/Foodata";


export const contextProvider = createContext();


const getdefault = () => {
  let cart = {};
  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const FoodContext = ({ children }) => {
  // fooddata and search functionality
  const [foods, setFood] = useState(data);
  const [searchFood, setSearchFood] = useState("");
  const filterCategory = (category) => {
    setFood(data.filter((item) => item.category === category));
  };
  const handleInput = () => {
    if (searchFood === "") return;

    const search = data.filter((item) =>
      item.name.toLowerCase().includes(searchFood.toLowerCase())
    );
    setFood(search);
  };

  // addtocart functionality
  const [displayCart, setdisplayCart] = useState(getdefault());

  const addToCart = (Id) => {
    setdisplayCart((prev) => ({ ...prev, [Id]: prev[Id] + 1 }));
  };
  const removeCart = (Id) => {
    setdisplayCart((prev) => ({ ...prev, [Id]: prev[Id] - 1 }));
  };
  const calculateTotal = () => {
    let total = 0;
    data.forEach((pro) => {
      total += displayCart[pro.id] * pro.price;
    });
    return total.toFixed(2);
  };

  const Total = calculateTotal();
  const deleteFromCart = (id) => {
    setdisplayCart((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[id];
      return updatedCart;
    });
  };



  const contextValue = {
    handleInput,
    filterCategory,
    setSearchFood,
    foods,
    searchFood,
    setFood,
    Total,
    removeCart,
    addToCart,
    displayCart,
    deleteFromCart
  };
  return (
    <contextProvider.Provider value={contextValue}>
      {children}
    </contextProvider.Provider>
  );
};

export default FoodContext;
