import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <form onSubmit={handleLogin}>
      <h3>
        current input
        {email}
        {password}
      </h3>
      <label>login</label>
      <input onChange={(e) => setEmail(e.target.value)} type="email"></input>
      <label>password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      ></input>
      <button className="btn-shop">login now</button>
      No account? Sign up <Link to="/signup">here</Link>
    </form>
  );
}

export default Login;
