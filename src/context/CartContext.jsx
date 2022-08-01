import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  
  return <CartContext.Provider value={useState([])}>{children}</CartContext.Provider>;
};
