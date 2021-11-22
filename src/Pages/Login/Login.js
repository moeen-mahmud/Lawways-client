import React, { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import BackButton from "../../components/BackButton/BackButton";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [userData, setUserData] = useState({});

  const { logInUser, signInUsingGoogle, isLoading } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleUserData = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newUserData = { ...userData };
    newUserData[field] = value;
    setUserData(newUserData);
  };

  const handleLogInUser = (e) => {
    e.preventDefault();

    logInUser(userData.email, userData.password, location, navigate);
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
            Log in or continue with Google
          </p>
          {isLoading ? (
            <ClipLoader color="#232832" loading={isLoading} size={60} />
          ) : (
            <>
              <div className="mb-4">
                <form
                  onSubmit={handleLogInUser}
                  className="flex flex-col justify-center gap-4"
                >
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
                    Log In
                  </button>
                </form>
              </div>
              <p className="text-sm text-center">Or</p>
              <div className="mt-4 text-center">
                <button
                  onClick={() => signInUsingGoogle(location, navigate)}
                  className="flex items-center justify-center w-full gap-4 py-2 border border-gray-700 rounded"
                >
                  <FcGoogle /> Continue With Google
                </button>
                <h3 className="mt-4 text-sm font-medium text-gray-600">
                  Don't have an account?{" "}
                  <Link className="text-gray-800" to="/register">
                    Register here
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

export default Login;
