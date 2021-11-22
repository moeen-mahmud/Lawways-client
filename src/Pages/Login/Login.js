import React from "react";

import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="w-full px-8 py-12 text-center rounded shadow-lg md:w-1/4">
        <h1 className="mb-4 font-serif text-4xl font-bold text-gray-800">
          Lawways
        </h1>
        <p className="text-lg font-medium text-gray-500">
          Log in or continue with Google
        </p>
        <div className="my-4">
          <form className="flex flex-col justify-center gap-4">
            <input
              className="p-2 text-gray-700 border border-gray-400 rounded"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="p-2 text-gray-700 border border-gray-400 rounded"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button className="py-2 text-gray-200 bg-gray-800 rounded">
              Log In
            </button>
          </form>
        </div>
        <p className="text-sm text-center">Or</p>
        <div className="mt-4 text-center">
          <button className="flex items-center justify-center w-full gap-4 py-2 border border-gray-700 rounded">
            <FcGoogle /> Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
