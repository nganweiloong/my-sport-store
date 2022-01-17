import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      await login(email, password);
      navigate("/cart");
    } catch {
      setErrorMsg("Failed to login");
    }
    setLoading(false);
  }
  return (
    <form onSubmit={handleLogin}>
      {errorMsg && <h1>{errorMsg}</h1>}
      {currentUser?.email}
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
