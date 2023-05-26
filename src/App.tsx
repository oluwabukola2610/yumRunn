import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/home/Home";
import Food from "./pages/food/Food";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import FoodContext from "./context/FoodContext";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <Router>
      <FoodContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth/customer/login" element={<LoginPage />} />
          <Route path="/auth/customer/signup" element={<SignUp />} />
          <Route path="/food" element={<Food />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </FoodContext>
    </Router>
  );
}

export default App;
