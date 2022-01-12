import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartPlus,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
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
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Products</a>
          </li>
        </ul>
        <div className="secondary-nav">
          <div>
            <FontAwesomeIcon icon={faCartPlus} />
            <a>Carts</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faPeopleArrows} />
            <a>Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
