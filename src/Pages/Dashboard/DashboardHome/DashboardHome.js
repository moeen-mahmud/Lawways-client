import React from "react";
import { Outlet } from "react-router";
import useAuth from "../../../hooks/useAuth";
import DashboardNavigation from "./DashboardNavigation";

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="flex">
      <div>
        <DashboardNavigation />
      </div>
      <div className="w-full">
        <div className="flex items-center px-4 py-4 text-gray-100 bg-gray-800">
          <h1 className="flex-grow text-2xl">Dashboard</h1>
          <p>Hello {user.displayName?.split(" ")[0]}</p>
        </div>
        <div className="px-4 pt-6 mt-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
