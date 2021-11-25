import React from "react";
import { Navigate, useLocation } from "react-router";
import { ClipLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, admin, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="relative flex items-center justify-center h-screen">
        <div>
          <ClipLoader color="#232832" loading={isLoading} size={60} />
        </div>
      </div>
    );
  }

  if (user.email && admin) {
    return children;
  } else {
    return (
      <Navigate
        to={`/dashboard/${user?.displayName}`}
        state={{ from: location }}
      />
    );
  }
};

export default AdminRoute;
