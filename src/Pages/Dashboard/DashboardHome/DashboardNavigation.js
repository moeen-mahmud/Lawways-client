import React from "react";

import { FaClipboardCheck } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const DashboardNavigation = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div>
      <aside
        style={{ minWidth: "220px" }}
        className="h-screen px-4 py-6 border-2"
      >
        <div className="pt-6 pb-2 border-b-2 -mt-9">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 p-2 text-lg font-semibold text-gray-700 rounded active:bg-gray-500"
          >
            <AiFillHome className="text-2xl" /> Back to home
          </button>
        </div>
        <ul className="mt-4">
          <li>
            <button
              onClick={() => navigate(`/dashboard/${user.displayName}`)}
              className="flex items-center gap-2 p-2 text-lg font-semibold text-gray-700 rounded active:bg-gray-500"
            >
              <BsFillPersonFill className="text-2xl" /> My Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/dashboard/user-orders")}
              className="flex items-center gap-2 p-2 text-lg font-semibold text-gray-700 rounded active:bg-gray-500"
            >
              <FaClipboardCheck className="text-2xl" /> My Orders
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/dashboard/payment")}
              className="flex items-center gap-2 p-2 text-lg font-semibold text-gray-700 rounded active:bg-gray-500"
            >
              <AiFillCreditCard className="text-2xl" /> Payment
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/dashboard/user-review")}
              className="flex items-center gap-2 p-2 text-lg font-semibold text-gray-700 rounded active:bg-gray-500"
            >
              <MdRateReview className="text-2xl" /> Review
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default DashboardNavigation;

/*
    <Link to="/dashboard">Dashboard Home</Link>
    <Link to="/dashboard/user-orders">My Orders</Link>
    <Link to="/dashboard/payment">Payment</Link>
    <Link to="/dashboard/user-review">Review</Link>
 */
