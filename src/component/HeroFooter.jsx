import React from "react";
import appstore from "../asset/app-store-badge.svg";
import playstore from "../asset/play-store-badge (1).svg";
import fries from "../asset/fries.png";
import burger from "../asset/burger.png";

const HeroFooter = () => {
  return (
    <footer className="cta h-[90vh] w-full">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-white font-bold ">
          Together, let’s <br /> keep spreading Happiness.
        </h1>
        <div className="flex flex-col md:flex-row md:justify-center gap-4 items-center">
          <img src={appstore} alt="" />
          <img src={playstore} alt="" />
        </div>
      </div>
      <img src={fries} alt="" className="fries"/>
      <img src={burger} alt="" className="burger"/>
    </footer>
  );
};

export default HeroFooter;
