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
    const filtered = data.filter((item) => item.category === category);
    setFood(filtered);
  };

  const handleInput = () => {
    if (searchFood === "") return;

    const search = data.filter((item) =>
      item.name.toLowerCase().includes(searchFood.toLowerCase())
    );

    setFood(search);
    setSearchFood("");
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
    Object.keys(displayCart).forEach((id) => {
      const quantity = displayCart[id];
      const product = data.find((pro) => pro.id === parseInt(id));
      if (product) {
        total += quantity * product.price;
      }
                    
    });

    // Apply discount (example: 10% discount)
    const discountPercentage = 5; // Set your desired discount percentage
    const discount = (total * discountPercentage) / 100;
    const discountedTotal = total - discount;

    return discountedTotal.toFixed(2);
  };

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
    Total: calculateTotal(),
    removeCart,
    addToCart,
    displayCart,
    deleteFromCart,
  };
  return (
    <contextProvider.Provider value={contextValue}>
      {children}
    </contextProvider.Provider>
  );
};

export default FoodContext;
