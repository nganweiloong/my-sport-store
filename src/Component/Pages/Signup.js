import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  function handleSignup(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSignup}>
      <h1>Sign Up</h1>
      <h4>
        {fullname}
        {email}
        {password}
      </h4>
      <label>Full name</label>
      <input onChange={(e) => setFullname(e.target.value)} type="text"></input>
      <label>email</label>
      <input onChange={(e) => setEmail(e.target.value)} type="email"></input>
      <label>password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      ></input>
      Already got account ? Login in <Link to="/login">here</Link>
      <button className="btn-shop">Sign up</button>
    </form>
  );
}

export default Signup;
