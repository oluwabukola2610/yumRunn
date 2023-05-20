import React from "react";
import HeroFooter from "../../component/HeroFooter";
import FoodNav from "./component/FoodNav";
import Testimonial from "./component/Testimonial";
import FoodData from "./component/FoodData";

const Food = () => {
  

  return (
    <div className="">
      <FoodNav />
      <FoodData />
      <Testimonial />
      <HeroFooter />
    </div>
  );
};

export default Food;
