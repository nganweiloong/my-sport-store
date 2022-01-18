import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { useAuth } from "../../context/AuthContext";

function CartPage() {
  const [errorMsg, setErrorMsg] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    setErrorMsg("");
    try {
      await logout();
      // navigate("/");
    } catch {
      setErrorMsg("Failed to logout");
    }
  }

  useEffect(() => {
    if (!currentUser) {
      alert("Please login first");
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <span>error: {errorMsg && <h1>{errorMsg}</h1>}</span>
      Cart (after login!) current user {currentUser?.email}
      <button className="btn-shop" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}

export default CartPage;
