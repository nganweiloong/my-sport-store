import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup, currentUser } = useAuth();

  async function handleSignup(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setErrorMsg("Passwords do not match");
    }
    try {
      setErrorMsg("");
      setLoading(true);
      await signup(email, password);
    } catch {
      setErrorMsg("Failed to create an error");
    }
    setLoading(false);
  }
  return (
    <form onSubmit={handleSignup}>
      {errorMsg && <h2>{errorMsg} </h2>}
      current user => {currentUser?.email}
      <h1>Sign Up</h1>
      <h4>
        {fullname}
        {email}
        {password}
        {passwordConfirm}
      </h4>
      {/* <label>Full name</label>
      <input onChange={(e) => setFullname(e.target.value)} type="text"></input> */}
      <label>email</label>
      <input onChange={(e) => setEmail(e.target.value)} type="email"></input>
      <label>password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      ></input>
      <label>password confirm</label>
      <input
        onChange={(e) => setPasswordConfirm(e.target.value)}
        type="password"
      ></input>
      Already got account ? Login in <Link to="/login">here</Link>
      <button disabled={loading} className="btn-shop">
        Sign up
      </button>
    </form>
  );
}

export default Signup;
