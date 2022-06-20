import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const isLogin = useContext(AuthContext)
  return <div>{isLogin?"logout":"login"}</div>;
};

export default Login;
