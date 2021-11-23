import React from "react";
import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="flex justify-center">
      <section className="flex flex-col items-center justify-center gap-4">
        <div>
          {user.photoURL ? (
            <img
              style={{ borderRadius: "50%" }}
              src={user.photoURL}
              alt={user.displayName}
            />
          ) : (
            <span
              style={{ borderRadius: "50%" }}
              className="px-5 py-4 text-2xl font-semibold text-gray-200 bg-gray-800"
            >
              {user.displayName?.slice(0, 1)}
            </span>
          )}
        </div>
        <div className="mt-4 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome {user.displayName}
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Profile;
