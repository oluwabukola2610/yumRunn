import React from "react";
import partner from "../../../asset/pexels-karolina-grabowska-5900228.jpg";
import appstore from "../../../asset/app-store-badge.svg";
import playstore from "../../../asset/play-store-badge (1).svg";

const VendorPartner = () => {
  return (
    <section className="mx-auto max-w-[1640px] pt-6 ">
      <div className="p-4 md:px-8 lg:px-14 lg:py-8 flex flex-col justify-center md:flex-row-reverse  md:justify-between">
        <div className="relative border-solid border-2 border-[#f8dcc5] p-4 rounded-2xl h-max  border-r-[12px]">
          <img
            className="object-cover h-[400px] w-[420px] rounded-2xl"
            alt=""
            src={partner}
          />
        </div>
        <div className=" pt-5 md:pt-0 flex flex-col gap-y-5 justify-center max-w-md capitalize text-center md:text-left">
          <h1 className=" text-3xl lg:text-4xl font-primary font-semibold text-deeperO">
            Become A Food Vendor Partner{" "}
          </h1>
          <p className="">
            We offer 24/7 support to help you increase your daily sales and
            double your income when you set up your restaurant business on
            foodelo
          </p>

          <div className="flex flex-col md:flex-row md:justify-center gap-4 items-center">
            <img src={appstore} alt="" className="w-40 " />
            <img src={playstore} alt="" className="w-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorPartner;
