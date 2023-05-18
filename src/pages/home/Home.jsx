import React from "react";
import Hero from "./component/Hero";
import Order from "./component/Order";
import Service from "./component/Service";
import FoodVendor from "./component/FoodVendor";
import HeroFooter from "../../component/HeroFooter";
import Footer from "../../component/Footer";
import VendorPartner from "./component/VendorPartner";
import Navbar from "../../component/Navbar";
import ScrollTop from "./component/ScrollTop";

const Home = () => {
  return (
    <div>
            <Navbar />

      <Hero />
      <Order />
      <Service />
      <VendorPartner />
      <FoodVendor />
      <HeroFooter />
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Home;
