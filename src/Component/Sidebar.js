import {
  faCartPlus,
  faCross,
  faPeopleArrows,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/ProductContext";

function Sidebar() {
  const { currentUser, logout, username, totalProduct } = useAuth();
  const { sidebarShow, setSidebarShow } = useProductsContext();
  return (
    <React.Fragment>
      <div
        onClick={(e) => setSidebarShow(false)}
        className={`sidebar-background ${
          sidebarShow && "show-sidebar-background"
        }`}
      >
        {" "}
      </div>

      <div className={`sidebar ${sidebarShow && "show-sidebar"}`}>
        <div className="side-header">
          <div className="logo">
            <img src="/images/logo.svg"></img>
          </div>
          <button onClick={() => setSidebarShow(false)}>
            <FontAwesomeIcon className="icon-close" icon={faTimes} size="2x" />
          </button>
        </div>
        <ul className="sidebar-link">
          <li>
            <Link onClick={() => setSidebarShow(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setSidebarShow(false)} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setSidebarShow(false)} to="/products">
              Products
            </Link>
          </li>
        </ul>
        <div className="sidebar-footer">
          <div className="cart-icon">
            <FontAwesomeIcon icon={faCartPlus} />
            <Link onClick={() => setSidebarShow(false)} to="/cart">
              Carts
            </Link>
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
                <Link
                  onClick={() => setSidebarShow(false)}
                  className="logout-btn"
                  to="/"
                >
                  <button onClick={logout}>Sign out</button>
                </Link>
              </div>
            ) : (
              <div className="btn-login">
                <FontAwesomeIcon icon={faPeopleArrows} />
                <Link onClick={() => setSidebarShow(false)} to="/login">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
