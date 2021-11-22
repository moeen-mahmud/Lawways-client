import { Navigate, useLocation } from "react-router";
import { ClipLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";

const Private = ({ children }) => {
  const { user, isLoading } = useAuth();
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

  if (user.email) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default Private;
