import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Animated } from "react-animated-css";

function Signup() {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup, fsCollection } = useAuth();
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setErrorMsg("Passwords do not match");
    }

    if (password.length > 20) {
      return setErrorMsg("The password has exceeded the maximum limit (20)");
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const credentials = await signup(email, password);
      await fsCollection(credentials, email, username, password);
      console.log("running inside try");
      setSuccessMsg(
        "Your account has been successfully created, you will now automatically get redicrected to home page"
      );
      setTimeout(() => {
        setSuccessMsg("");
        navigate("/");
      }, 2000);
    } catch {
      setErrorMsg("Failed to create an account!");
    }
    setLoading(false);
  }
  return (
    <div className="login-background">
      <div className="fixed-container">
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <div className="login-form-container">
            <form className="login-form" onSubmit={handleSignup}>
              <h2 className="login-form-title">Sign Up</h2>
              {errorMsg && <div className="error-msg">{errorMsg}</div>}
              {successMsg && <div className="success-msg">{successMsg}</div>}
              <div className="input-field">
                <input
                  onChange={(e) => setusername(e.target.value)}
                  type="text"
                  placeholder="Username (Maximum 15 characters)"
                  maxLength={15}
                  minLength={6}
                ></input>
              </div>
              <div className="input-field">
                <input
                  maxLength={40}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                ></input>
              </div>
              <div className="input-field">
                <input
                  maxLength={15}
                  minLength={6}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                ></input>
              </div>
              <div className="input-field">
                <input
                  maxLength={15}
                  minLength={6}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  type="password"
                  placeholder="Password Confirmation"
                ></input>
              </div>
              <button className="btn-shop">Sign up now</button>
              <div className="form-forgot-password">Forgot password?</div>
              <div>
                Already have an account? <Link to="/login"> Login here</Link>
              </div>
            </form>
          </div>
        </Animated>
      </div>
    </div>
  );
}

export default Signup;
