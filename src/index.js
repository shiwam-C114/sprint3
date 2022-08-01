import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <CartProvider>
        <ChakraProvider>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </ChakraProvider>
      </CartProvider>
    </BrowserRouter>
  </>
);
