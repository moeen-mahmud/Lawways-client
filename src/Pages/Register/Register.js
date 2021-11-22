import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import BackButton from "../../components/BackButton/BackButton";
import useAuth from "../../hooks/useAuth";
import { ClipLoader } from "react-spinners";

const Register = () => {
  const [userData, setUserData] = useState({});

  const { registerUser, isLoading } = useAuth();

  const navigate = useNavigate();

  const handleUserData = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newUserData = { ...userData };
    newUserData[field] = value;
    setUserData(newUserData);
  };

  const handleRegisterUser = (e) => {
    e.preventDefault();

    registerUser(userData.email, userData.password, userData.name, navigate);
  };

  return (
    <>
      <BackButton />
      <div className="flex justify-center">
        <div className="w-full px-8 py-12 text-center rounded shadow-lg md:w-1/4">
          <h1 className="mb-4 font-serif text-4xl font-bold text-gray-800">
            Lawways
          </h1>
          <p className="mb-4 text-lg font-medium text-gray-500">
            Sign up or continue with Google
          </p>
          {isLoading ? (
            <ClipLoader color="#232832" loading={isLoading} size={60} />
          ) : (
            <>
              <div className="mb-4">
                <form
                  onSubmit={handleRegisterUser}
                  className="flex flex-col justify-center gap-4"
                >
                  <input
                    className="p-2 text-gray-700 border border-gray-400 rounded"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    onBlur={handleUserData}
                  />
                  <input
                    className="p-2 text-gray-700 border border-gray-400 rounded"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onBlur={handleUserData}
                  />
                  <input
                    className="p-2 text-gray-700 border border-gray-400 rounded"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onBlur={handleUserData}
                  />
                  <button
                    type="submit"
                    className="py-2 text-gray-200 bg-gray-800 rounded"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
              <p className="text-sm text-center">Or</p>
              <div className="mt-4 text-center">
                <button className="flex items-center justify-center w-full gap-4 py-2 border border-gray-700 rounded">
                  <FcGoogle /> Continue With Google
                </button>
                <h3 className="mt-4 text-sm font-medium text-gray-600">
                  Already registered?{" "}
                  <Link className="text-gray-800" to="/login">
                    Login here
                  </Link>
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
