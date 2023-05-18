import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/home/Home";
import Food from "./pages/food/Food";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth/customer/login" element={<LoginPage />} />
        <Route path="/auth/customer/login" element={<LoginPage />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </Router>
  );
}

export default App;
