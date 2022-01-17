import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartPlus,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
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
            <div>
              <FontAwesomeIcon icon={faCartPlus} />
              <a>Carts</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faPeopleArrows} />
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
