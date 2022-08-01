import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  return <AuthContext.Provider value={useState(false)} >{children}</AuthContext.Provider>;
};
