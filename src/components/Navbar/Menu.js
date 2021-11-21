import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ openMenu }) => {
  return (
    <div>
      {openMenu && (
        <div className="text-gray-100 bg-gray-800 menu-style">
          <div className="flex items-center justify-center">
            <nav className="flex flex-col justify-center gap-3 text-center">
              <NavLink
                className="text-lg font-semibold"
                style={({ isActive }) => ({
                  color: isActive ? "gray" : "rgb(229, 231, 235)",
                })}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="text-lg font-semibold"
                style={({ isActive }) => ({
                  color: isActive ? "gray" : "rgb(229, 231, 235)",
                })}
                to="/about"
              >
                About
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
