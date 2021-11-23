import React from "react";
import { Link } from "react-router-dom";

const DashboardNavigation = () => {
  return (
    <div>
      <Link to="/dashboard">Dashboard Home</Link>
      <Link to="/dashboard/user-orders">My Orders</Link>
      <Link to="/dashboard/payment">Payment</Link>
      <Link to="/dashboard/user-review">Review</Link>
    </div>
  );
};

export default DashboardNavigation;
