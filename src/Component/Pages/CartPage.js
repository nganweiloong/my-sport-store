import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { fs, auth } from "../../Config/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

function CartPage() {
  const { currentUser, cartProducts } = useAuth();
  const navigate = useNavigate();
  const cartQuantityArr = cartProducts.map((product) => product.quantity);
  const cartPriceArr = cartProducts.map((product) => product.TotalProductPrice);
  const totalPrice = cartPriceArr.reduce((a, num) => {
    return a + num;
  }, 0);
  const totalItem = cartQuantityArr.reduce((a, num) => {
    return a + num;
  }, 0);
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
                <CartItem product={product} />{" "}
              </li>
            );
          })}
        </ul>
        <div className="total-detail">
          <div className="total-detail-price">
            <div>
              <span>Total item </span>
              <span>{totalItem}</span>
            </div>
            <div>
              <span>Total Price </span>
              <span>RM {totalPrice.toFixed(2)}</span>
            </div>
            <button
              disabled={totalItem === 0}
              onClick={() => {
                alert(
                  "Payment feature still in testing stage, Thank you for testing up my website. :) Have a nice day!"
                );
              }}
              className="btn-shop btn-cartpage"
            >
              Pay now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

function CartItem(props) {
  const [productCount, setProductCount] = useState(1);
  const { url, priceAfter, quantity, name, TotalProductPrice } = props.product;

  function handleCartIncrement() {
    let Product;
    Product = props.product;
    Product.quantity += 1;
    Product.TotalProductPrice = Product.quantity * Product.priceAfter;
    auth.onAuthStateChanged((user) => {
      fs.collection(`Cart ${user.uid}`).doc(props.product.ID).update(Product);
    });
  }
  function handleCartDecrement() {
    if (quantity === 1) return;
    let Product;
    Product = props.product;
    Product.quantity -= 1;
    Product.TotalProductPrice = Product.quantity * Product.priceAfter;
    auth.onAuthStateChanged((user) => {
      fs.collection(`Cart ${user.uid}`).doc(props.product.ID).update(Product);
    });
  }

  const handleDelete = () => {
    auth.onAuthStateChanged(async (user) => {
      await fs.collection(`Cart ${user.uid}`).doc(props.product.ID).delete();
    });
  };
  return (
    <div className="cart-items">
      <div className="img-wrapper">
        <img src={url}></img>
      </div>
      <div className="cart-item-detail">
        <h3>{name}</h3>
        <h4>RM{priceAfter.toFixed(2)}</h4>
        <div className="cart-item-quantity">
          Quantity{" "}
          <div className="btn-wrap">
            <button onClick={handleCartDecrement}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            {quantity}
            <button>
              {" "}
              <FontAwesomeIcon onClick={handleCartIncrement} icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
      <div className="totalproductprice">
        <span>Total : RM{TotalProductPrice.toFixed(2)}</span>
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} size="2x"></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}
