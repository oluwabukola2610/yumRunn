import React from "react";
import partner from "../../../asset/pexels-karolina-grabowska-5900228.jpg";
import appstore from "../../../asset/app-store-badge.svg";
import playstore from "../../../asset/play-store-badge (1).svg";

const VendorPartner = () => {
  return (
    <section className="w-full flex flex-col justify-between my-16">
    <div className="m-auto max-w-[1240px] flex flex-col md:flex-row-reverse gap-x-20">
        <div className="relative border-solid border-2 border-[#f8dcc5] p-2 rounded-2xl h-max  border-r-[12px]">
          <img
            className="object-cover h-[380px] w-[380px] rounded-2xl"
            alt=""
            src={partner}
          />
        </div>
        <div className=" pt-5 md:pt-0 flex flex-col gap-y-5 justify-center max-w-lg capitalize text-center md:text-left">
        <h1 className=" text-4xl font-secondary font-semibold text-deeperO">
            Become A Food Vendor Partner{" "}
          </h1>
          <p className="">
            We offer 24/7 support to help you increase your daily sales and
            double your income when you set up your restaurant business on
            foodelo
          </p>

          <div className="flex flex-col md:flex-row md:justify-start gap-4 items-center">
            <img src={appstore} alt="" className="w-40 " />
            <img src={playstore} alt="" className="w-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorPartner;
