import React from "react";
import { Outlet } from "react-router";
import DashboardNavigation from "./DashboardNavigation";

const DashboardHome = () => {
  return (
    <div>
      <DashboardNavigation />
      <h1>This is dashboard home</h1>
      <Outlet />
    </div>
  );
};

export default DashboardHome;
