import React, { createContext } from "react";

export const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  // code here
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
