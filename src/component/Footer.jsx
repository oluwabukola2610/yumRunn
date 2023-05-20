import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="mx-auto max-w-[1640px] w-full h-[50vh]">
      <footer className="flex flex-wrap justify-center gap-8 md:gap-20 items-center px-6 py-14 ">
      <Link to='/' className="logo">
        <h1 className="text-4xl md:text-5xl ">yumRun</h1>
      </Link>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Get Started</h2>
          <p>Create account</p>
          <p>Become a food delivery partner</p>
        </div>

        <div className="space-y-4">
        <h2 className="text-xl font-semibold">Important</h2>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>FAQs</p>
          <p>Vendors' guide</p>
        </div>

        <div className="space-y-4">
        <h2 className="text-xl font-semibold">Social</h2>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </footer>
      <p className="text-center py-4">Made with ❤️ <span>@Bukkycodes copywrite</span> </p>
    </div>
  );
};

export default footer;
