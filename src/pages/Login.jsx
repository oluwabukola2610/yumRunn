import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";

const Login = () => {
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
    <>
      <Navbar />
      <section className="mx-auto max-w-[1640px] ">
        <div className="max-h-[600px] relative">
          {/* overlay */}
          <div className="absolute w-full h-full max-h-[600px] text-gray-200 bg-black/25 flex flex-col justify-center items-center">
            <p class="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white">
              Hi, Welcome back 👋
            </p>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={() => navigate("/food")}
                >
                  <div>
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
                      className="bg-gray-300 rounded-lg focus:outline-none text-gray-900 sm:text-sm  block w-full p-2.5"
                      placeholder="name@company.com"
                      required={true}
                    />
                  </div>

                  {/* togglePassword */}
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Password
                    </label>
                    <div className="flex items-center justify-between bg-gray-300 rounded-lg border border-gray-400">
                      <input
                        onChange={handlePasswordChange}
                        type={passwordType}
                        name={passwordType}
                        value={passwordInput}
                        id="password"
                        placeholder="••••••••"
                        className="bg-transparent focus:outline-none text-gray-900 sm:text-sm  block w-full p-2.5"
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
            </div>
          </div>
          <img
            className="  w-full max-h-[600px] object-cover"
            alt=""
            src="https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          />
        </div>
      </section>
    </>
  );
};

export default Login;
