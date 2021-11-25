// Importing necessary module
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Importing brand logo
import brandLogo from "../../assets/main-logo.png";

// Menu icon
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

// Importing stylesheet
import "./Navbar.css";
import Menu from "./Menu";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();

  const handleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      <header className="md:mb-2">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img className="w-2/4" src={brandLogo} alt="Lawways" />
          </div>
          <div className="z-10 block md:hidden">
            <button onClick={handleMobileMenu}>
              {openMenu ? (
                <FaTimes style={{ color: "#fefeff" }} className="menu-icon" />
              ) : (
                <FiMenu className="menu-icon" />
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-6">
              <NavLink
                className="text-lg font-semibold"
                style={({ isActive }) => ({
                  color: isActive ? "gray" : "#232832",
                })}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="text-lg font-semibold"
                style={({ isActive }) => ({
                  color: isActive ? "gray" : "#232832",
                })}
                to="/about"
              >
                About
              </NavLink>
              {user.email ? (
                <>
                  <button
                    onClick={() => navigate(`/dashboard/${user.displayName}`)}
                    className="text-lg font-semibold text-gray-700"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={logOut}
                    className="text-lg font-semibold text-gray-700"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  className="text-lg font-semibold"
                  style={({ isActive }) => ({
                    color: isActive ? "gray" : "#232832",
                  })}
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </nav>
          </div>
        </div>
      </header>
      <Menu openMenu={openMenu} />
    </div>
  );
};

export default Navbar;
