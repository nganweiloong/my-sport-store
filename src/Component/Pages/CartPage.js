import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { useAuth } from "../../context/AuthContext";
import { useProductsContext } from "../../context/ProductContext";

function CartPage() {
  const { productsDB } = useProductsContext();
  return <div>{productsDB.map((x) => x.id)}</div>;
}

export default CartPage;
