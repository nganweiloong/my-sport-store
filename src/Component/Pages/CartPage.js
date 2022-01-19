import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { useAuth } from "../../context/AuthContext";
import { useProductsContext } from "../../context/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

function CartPage() {
  return (
    <div className="container-background">
      <div className="cart-page-container fixed-container">
        <h2>My Cart</h2>
        <CartItem />
      </div>
    </div>
  );
}

export default CartPage;

function CartItem() {
  return (
    <div className="cart-items">
      <div className="img-wrapper">
        <img src="/images/Product/feature-test-1.jpg"></img>
      </div>
      <div className="cart-item-detail">
        <h3>Yonex Z-force 2</h3>
        <h4>RM669</h4>
        <div className="cart-item-quantity">
          Quantity{" "}
          <div className="btn-wrap">
            <button>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            1
            <button>
              {" "}
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
      <button>
        <FontAwesomeIcon icon={faTrash} size="2x"></FontAwesomeIcon>
      </button>
    </div>
  );
}
