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
    <div>
      <header className="md:mb-2">
        <div className="flex items-center justify-between px-8 py-4">
          <div>
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
            </nav>
          </div>
        </div>
      </header>
      <Menu openMenu={openMenu} />
    </div>
  );
};

export default Navbar;
