import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const navigate = useNavigate();
  return (
    <section className="mx-auto max-w-[1640px]">
      <div className="max-h-[600px] relative ">
        <div className="w-full h-[100vh] px-3 sm:px-5 flex items-center justify-center absolute bg-black/25">
          <div className="absolute left-5 top-6 md:left-20 md:top-10 mb-6">
            <Link to="/" className="logo">
              <h1 className="text-3xl md:text-4xl font-semibold !text-deeperO">
                yumRun
              </h1>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-12 justify-center  items-center ">
            <h1 className="text-white/80 text-2xl md:text-4xl lg:text-5xl font-extrabold md:max-w-xl ">
            Create an account  & Start ordering
            </h1>
          <form
            onSubmit={() => navigate("/auth/customer/login")}
            className="w-full sm:max-w-md px-6 space-y-5 md:space-y-7 bg-gray-400 bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4  rounded-lg"
          >
            <h1 className="w-full flex justify-center font-bold text-white text-bold text-2xl mb:2 md:mb-5">
              Create Account
            </h1>
            <div className="">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className=" block w-full p-1.5 md:p-2.5 bg-gray-300 rounded-lg  placeholder-gray-600 text-gray-900 focus:outline-none"
                placeholder="Mary Jane"
                required={true}
              />
            </div>
            <div className="">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className=" block w-full p-1.5 md:p-2.5 bg-gray-300 rounded-lg  placeholder-gray-600 text-gray-900 focus:outline-none"
                placeholder="name@company.com"
                required={true}
              />
            </div>
            <div className="">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your password
              </label>
              <div className="flex items-center justify-between bg-gray-300 rounded-lg border border-gray-400">
                <input
                  onChange={handlePasswordChange}
                  type={passwordType}
                  name={passwordType}
                  value={passwordInput}
                  id="password"
                  placeholder="••••••••"
                  className=" block w-full p-1.5 md:p-2.5 bg-gray-300 rounded-lg  placeholder-gray-600 text-gray-900 focus:outline-none"
                  required={true}
                />
                <div onClick={togglePassword} className="px-4 text-black">
                  {passwordType === "password" ? (
                    <AiFillEyeInvisible size={20} />
                  ) : (
                    <AiFillEye size={20} />
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-deeperO hover:bg-orange-400 focus:ring-4 focus:outline-none  font-medium rounded-xl text-md px-5 py-2.5 text-center "
            >
              Sign up
            </button>
            <p className="text-sm font-light text-gray-300">
              Already have an account ? {" "}
              <Link
                to="/auth/customer/login"
                className="font-medium text-primary hover:underline text-deeperO"
              >
                Log in
              </Link>
            </p>
          </form>
          </div>
        </div>

        <img
          className="  w-full h-screen object-cover"
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6CjEW3vFeV5RXWpl-4YR_8XrbUhb-M9b-w&usqp=CAU"
        />
      </div>
    </section>
  );
};

export default SignUp;
