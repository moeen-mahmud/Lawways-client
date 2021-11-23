import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Menu = ({ openMenu }) => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

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
              {user.email ? (
                <>
                  <button
                    style={{ color: "rgb(229, 231, 235)" }}
                    className="text-lg font-semibold"
                    onClick={() => navigate(`/dashboard/${user.displayName}`)}
                  >
                    Dashboard
                  </button>
                  <button
                    style={{ color: "rgb(229, 231, 235)" }}
                    className="text-lg font-semibold"
                    onClick={logOut}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  className="text-lg font-semibold"
                  style={({ isActive }) => ({
                    color: isActive ? "gray" : "rgb(229, 231, 235)",
                  })}
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
