import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartPlus,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";

function Nav() {
  const { currentUser, logout, username, totalProduct } = useAuth();
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src="/images/logo.svg"></img>
        </div>
        <button className="faBar-wrapper">
          <FontAwesomeIcon icon={faBars} size="2x" className="faBars" />
        </button>
        <div className="nav-list">
          <ul className="primary-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
          <div className="secondary-nav">
            <div className="cart-icon">
              <FontAwesomeIcon icon={faCartPlus} />
              <Link to="/cart">Carts</Link>
              <div
                className={`cart-icon-amount ${
                  totalProduct > 0 && "show-cart-icon-amount"
                } `}
              >
                {totalProduct}
              </div>
            </div>
            <div>
              {currentUser ? (
                <div className="login-logout">
                  <span>{username && username}</span>
                  <Link className="logout-btn" to="/">
                    <button onClick={logout}>Sign out</button>
                  </Link>
                </div>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPeopleArrows} />
                  <Link to="/login">Login</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
