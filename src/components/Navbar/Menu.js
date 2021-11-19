import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ openMenu }) => {
  return (
    <div>
      {openMenu && (
        <div className="menu-style bg-gray-800 text-gray-100">
          <nav className="flex flex-col gap-3 justify-center text-center">
            <NavLink
              className="font-semibold text-lg"
              style={({ isActive }) => ({
                color: isActive ? "gray" : "rgb(229, 231, 235)",
              })}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="font-semibold text-lg"
              style={({ isActive }) => ({
                color: isActive ? "gray" : "rgb(229, 231, 235)",
              })}
              to="/explore"
            >
              Explore
            </NavLink>
            <NavLink
              className="font-semibold text-lg"
              style={({ isActive }) => ({
                color: isActive ? "gray" : "rgb(229, 231, 235)",
              })}
              to="/about"
            >
              About
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Menu;
