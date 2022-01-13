import React from "react";
import AboutUs from "./AboutUs";

function About() {
  return (
    <div className="container-backgrodund-2">
      <div className="about-container fixed-container">
        <div className="about-header">
          <h1>ABOUT US</h1>
          <div className="about-subheader">
            <h2 className="about-subheader-active">ABOUT US</h2>
            <h2>OUR HISTORY</h2>
          </div>
        </div>
        <AboutUs />
      </div>
    </div>
  );
}

export default About;
