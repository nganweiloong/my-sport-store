import React from "react";
import AboutUs from "./AboutUs";
import { Link } from "react-router-dom";
import OurHistory from "./OurHistory";

function About() {
  return (
    <div className="container-backgrodund-2">
      <div className="about-container fixed-container">
        <div className="about-header">
          <h1>ABOUT</h1>
          <div className="about-subheader">
            <h2 className="about-subheader-active">ABOUT US</h2>

            <h2>OUR HISTORY</h2>
          </div>
        </div>
        <AboutUs />
        <OurHistory />
      </div>
    </div>
  );
}

export default About;
