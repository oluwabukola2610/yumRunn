import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../app/firestore";

import { data } from "../data/Foodata";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const contextProvider = createContext();

const getdefault = () => {
  let cart = {};
  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const FoodContext = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});

  //authentication

  // register/create account
  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Login successful");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        toast.error("Email already exists");
      } else {
        toast.error(err.message);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const LoginUser = async (email, password) => {
    try {
      // Sign in the user with the provided email and password
      await signInWithEmailAndPassword(auth, email, password);

      // Retrieve the currently authenticated user
      const user = auth.currentUser;

      // Check if the user exists and if their email is verified
      if (user && user.email) {
        // Authentication successful
        toast.success("Login successful");
        navigate("/food");
        return;
      }
    } catch (error) {
      console.error(error);
      // Authentication failed (user does not exist or email not verified)
      toast.error("Invalid email or password");
    }
  };
  const LogOut = () => {
    return signOut(auth);
  };
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
    LoginUser,
    createUser,
    currentUser,
    LogOut,
  };
  return (
    <contextProvider.Provider value={contextValue}>
      {children}
    </contextProvider.Provider>
  );
};

export default FoodContext;
