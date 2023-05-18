import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
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
        <div className="w-full h-[100vh] px-3 sm:px-5 flex items-center justify-center absolute">
          <div className="absolute left-5 top-6 md:left-20 md:top-10 mb-6">
            <Link to="/" className="logo">
              <h1 className="text-3xl md:text-4xl font-semibold !text-deeperO">
                yumRun
              </h1>
            </Link>
          </div>
          <form
            onSubmit={() => navigate("/food")}
            className="w-full sm:max-w-md px-6 space-y-4 md:space-y-6 bg-gray-300 bg-opacity-0 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4  rounded-lg"
          >
            <h1 className="w-full flex justify-center text-white text-bold text-2xl mb:2 md:mb-5">
              Sign in to your account
            </h1>
            <div className="mb-6">
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
            <div className="mb-6">
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
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50  "
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label for="remember" className="text-gray-300">
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="/"
                className="text-sm font-medium text-deeperO hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-deeperO hover:bg-orange-400 focus:ring-4 focus:outline-none  font-medium rounded-xl text-md px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-300">
              Don’t have an account yet?{" "}
              <a
                href="/"
                className="font-medium text-primary hover:underline text-deeperO"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>

        <img
          className="  w-full h-screen object-cover"
          alt=""
          src="https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
        />
      </div>
    </section>
  );
};

export default LoginPage;
