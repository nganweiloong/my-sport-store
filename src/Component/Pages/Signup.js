import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Animated } from "react-animated-css";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup, currentUser } = useAuth();
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setErrorMsg("Passwords do not match");
    }
    try {
      setErrorMsg("");
      setLoading(true);
      await signup(email, password);
      navigate("/");
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
              <div className="input-field">
                <input
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
    // <form onSubmit={handleSignup}>
    //   {errorMsg && <h2>{errorMsg} </h2>}
    //   current user => {currentUser?.email}
    //   <h1>Sign Up</h1>
    //   <h4>
    //     {fullname}
    //     {email}
    //     {password}
    //     {passwordConfirm}
    //   </h4>
    //   {/* <label>Full name</label>
    //   <input onChange={(e) => setFullname(e.target.value)} type="text"></input> */}
    //   <label>email</label>
    //   <input onChange={(e) => setEmail(e.target.value)} type="email"></input>
    //   <label>password</label>
    //   <input
    //     onChange={(e) => setPassword(e.target.value)}
    //     type="password"
    //   ></input>
    //   <label>password confirm</label>
    //   <input
    //     onChange={(e) => setPasswordConfirm(e.target.value)}
    //     type="password"
    //   ></input>
    //   Already got account ? Login in <Link to="/login">here</Link>
    //   <button disabled={loading} className="btn-shop">
    //     Sign up
    //   </button>
    // </form>
  );
}

export default Signup;
