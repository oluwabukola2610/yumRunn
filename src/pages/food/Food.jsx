import HeroFooter from "../../component/HeroFooter";
import FoodNav from "./component/FoodNav";
import Testimonial from "./component/Testimonial";
import FoodData from "./component/FoodData";
import FoodHero from "./component/FoodHero";

const Food = () => {
  
  return (
   
      <div>
        <FoodNav />
        <FoodHero />
        <FoodData />
        <Testimonial />
        <HeroFooter />
      </div>
  );
};

export default Food;
