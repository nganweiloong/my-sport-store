import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartPlus,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

function MissionVision() {
  return (
    <div className="container-background-2">
      <div className="shop-info-container">
        <div className="shop-info-article">
          <h3>We are the best online sport store in the town!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue
            quisque egestas diam in arcu cursus euismod quis. Tristique magna
            sit amet purus gravida quis blandit.
          </p>
        </div>
        <div className="article-container">
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  );
}

export default MissionVision;

function Article() {
  return (
    <div className="info-article-container">
      <FontAwesomeIcon icon={faBars} size="2x" className="article-icon" />
      <h3>Mission</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Congue quisque
        egestas diam in ar
      </p>
    </div>
  );
}
