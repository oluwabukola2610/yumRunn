import React from "react";
import HeroFooter from "../component/HeroFooter";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <header className="mx-auto max-w-[1640px] ">
        <div className="max-h-[600px] relative">
          {/* overlay */}
          <div className="absolute w-full h-full max-h-[500px] text-gray-200 bg-black/25 flex flex-col justify-center">
            <p className="px-4 text-4xl sm:text-5xl md:tex-6xl lg:text-7xl font-bold max-w-xl font-secondary">
              Order your <span className="text-orange-500"> favourite </span>{" "}
              meals. We'll deliver.
            </p>
          </div>
          <img
            className="  w-full max-h-[400px] object-cover"
            alt=""
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <div className="my-16 flex flex-col space-y-12">
          <div className="space-y-10 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold font-secondary text-deeperO">
              About Us
            </h1>
            <p className="max-w-lg text-xl px-4 text-center">
              YumRun is a food-tech company founded with the goal of offering
              seamless goods and services that would increase the profitability
              of food businesses by enabling them to reach more customers for
              their product offerings without being constrained by geographical
              limitations or other unavoidable circumstances that might
              naturally appear as barrier to their growth.
            </p>
          </div>
          <div className="space-y-10 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold font-secondary text-deeperO">
              Mission
            </h1>
            <p className="max-w-lg text-xl px-4 text-center">
              YumRun is a food-tech company founded with the goal of offering
              seamless goods and services that would increase the profitability
              of food businesses by enabling them to reach more customers for
              their product offerings without being constrained by geographical
              limitations or other unavoidable circumstances that might
              naturally appear as barrier to their growth.
            </p>
          </div>
        </div>
      </header>
      <HeroFooter />
    </>
  );
};

export default About;
