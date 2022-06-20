import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const isLogin = useContext(AuthContext)
  const [data, setData] = useState({
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  })
  function handleLogin() {
    console.log(isLogin);
    console.log(data);
    fetch('https://reqres.in/api/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res=>res.json()).then(console.log)

  }
  return <div>
    {isLogin?"logout":"login"}
    <br />
    <label htmlFor="email">Email</label>
    <input onChange={(e)=>setData({...data, email:e.target.value})} value={data.email} type="text" name="email" id="email" />
    <br />
    <label htmlFor="password">password</label>
    <input onChange={(e)=>setData({...data, password:e.target.value})} value={data.password} type="password" name="password" id="password"  />
    <br />
    <button onClick={handleLogin}>login</button>
    </div>;

};

export default Login;
