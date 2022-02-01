import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Newsletter() {
  return (
    <div className="container-background-3">
      <div className="newsletter-container">
        <div className="newsletter">
          <h3>
            Subscribe to our newsetter and get <span>10%</span> off for first
            purchase!
          </h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue
            quisque egestas diam in ar
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Enter your email"></input>
            <button>Subscribe</button>
          </form>
        </div>
        <div className="social-icons">
          <h3>Follow us to get latest information!</h3>
          <div className="icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
