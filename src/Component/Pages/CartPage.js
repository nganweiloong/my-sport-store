import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

function CartPage() {
  const { currentUser, cartProducts } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  useEffect(() => {
    if (!currentUser) {
      alert("Please login first");
      navigate("/login");
    }
  }, []);

  return (
    <div className="container-background">
      <div className="cart-page-container fixed-container">
        <h2>My Cart</h2>
        {cartProducts.length === 0 && <h2>Your cart is empty</h2>}
        <ul className="cart-list">
          {cartProducts.map((product) => {
            const { id } = product;
            return (
              <li key={id}>
                <CartItem {...product} />{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CartPage;

function CartItem({ url, priceAfter, quantity, name, TotalProductPrice }) {
  return (
    <div className="cart-items">
      <div className="img-wrapper">
        <img src={url}></img>
      </div>
      <div className="cart-item-detail">
        <h3>{name}</h3>
        <h4>RM{priceAfter}</h4>
        <div className="cart-item-quantity">
          Quantity{" "}
          <div className="btn-wrap">
            <button>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            {quantity}
            <button>
              {" "}
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
      <div className="totalproductprice">
        <span>Total : RM{TotalProductPrice}</span>
        <button>
          <FontAwesomeIcon icon={faTrash} size="2x"></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}
