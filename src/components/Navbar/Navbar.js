// Importing necessary module
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Importing brand logo
import brandLogo from "../../assets/main-logo.png";

// Menu icon
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

// Importing stylesheet
import "./Navbar.css";
import Menu from "./Menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };
  // TODO: have to make it fixed by default
  return (
    <>
      <header className="relative">
        <div className="flex justify-between items-center py-4 px-8">
          <div>
            <img className="w-2/4" src={brandLogo} alt="Lawways" />
          </div>
          <div className="block md:hidden z-10">
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
                className="font-semibold text-lg"
                style={({ isActive }) => ({
                  color: isActive ? "gray" : "#232832",
                })}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="font-semibold text-lg"
                style={({ isActive }) => ({
                  color: isActive ? "gray" : "#232832",
                })}
                to="/explore"
              >
                Explore
              </NavLink>
              <NavLink
                className="font-semibold text-lg"
                style={({ isActive }) => ({
                  color: isActive ? "gray" : "#232832",
                })}
                to="/about"
              >
                About
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
      <Menu openMenu={openMenu} />
    </>
  );
};

export default Navbar;
