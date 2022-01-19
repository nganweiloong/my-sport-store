import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Animated } from "react-animated-css";

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
      navigate("/");
    } catch {
      setErrorMsg("Failed to login");
    }
    setLoading(false);
  }
  return (
    <div className="login-background">
      <div className="fixed-container">
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <div className="login-form-container">
            <form className="login-form" onSubmit={handleLogin}>
              <h2 className="login-form-title">Login</h2>
              {errorMsg && <div className="error-msg">{errorMsg}</div>}
              <div className="input-field">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                ></input>
              </div>
              <div className="input-field">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                ></input>
              </div>
              <button className="btn-shop">Login now</button>
              <div className="form-forgot-password">Forgot password?</div>
              <div>
                No account? Sign up <Link to="/signup">here</Link>
              </div>
            </form>
          </div>
        </Animated>
      </div>
    </div>
  );
}

export default Login;
