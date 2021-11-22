import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const allAuthContext = useFirebase();
  return (
    <AuthContext.Provider value={allAuthContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
