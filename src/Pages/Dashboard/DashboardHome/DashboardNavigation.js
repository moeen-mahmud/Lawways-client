import React from "react";

import { FaClipboardCheck } from "react-icons/fa";
// import { AiFillCreditCard } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import { MdSupervisedUserCircle } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";

import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const DashboardNavigation = () => {
  const navigate = useNavigate();
  const { user, admin } = useAuth();

  return (
    <div>
      <aside
        style={{ minWidth: "250px" }}
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
          {admin ? (
            <>
              <li>
                <button
                  onClick={() => navigate("/dashboard/manage-services")}
                  className="flex items-center gap-2 p-2 text-lg font-semibold text-gray-700 rounded active:bg-gray-500"
                >
                  <BsGearFill className="text-2xl" /> Manage Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/dashboard/manage-user-services")}
                  className="flex items-center gap-2 p-2 text-lg font-semibold text-gray-700 rounded active:bg-gray-500"
                >
                  <MdSupervisedUserCircle className="text-2xl" /> User Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/dashboard/make-admin")}
                  className="flex items-center gap-2 p-2 text-lg font-semibold text-gray-700 rounded active:bg-gray-500"
                >
                  <MdAdminPanelSettings className="text-2xl" /> Make Admin
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/dashboard/add-service")}
                  className="flex items-center gap-2 p-2 text-lg font-semibold text-gray-700 rounded active:bg-gray-500"
                >
                  <MdAddCircle className="text-2xl" /> Add Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/dashboard/add-lawyer")}
                  className="flex items-center gap-2 p-2 text-lg font-semibold text-gray-700 rounded active:bg-gray-500"
                >
                  <FaUserGraduate className="text-2xl" /> Add Lawyer
                </button>
              </li>
            </>
          ) : (
            <>
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
                  <FaClipboardCheck className="text-2xl" /> My Services
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => navigate("/dashboard/payment")}
                  className="flex items-center gap-2 p-2 text-lg font-semibold text-gray-700 rounded active:bg-gray-500"
                >
                  <AiFillCreditCard className="text-2xl" /> Payment
                </button>
              </li> */}
              <li>
                <button
                  onClick={() => navigate("/dashboard/user-review")}
                  className="flex items-center gap-2 p-2 text-lg font-semibold text-gray-700 rounded active:bg-gray-500"
                >
                  <MdRateReview className="text-2xl" /> Review
                </button>
              </li>
            </>
          )}
        </ul>
      </aside>
    </div>
  );
};

export default DashboardNavigation;
