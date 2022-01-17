import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  console.log("running cart");

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
