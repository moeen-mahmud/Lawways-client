import React from "react";
import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>This is user {user.displayName}</h1>
    </div>
  );
};

export default Profile;
