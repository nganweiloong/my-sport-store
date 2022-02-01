import React from "react";

import { mvv } from "./mission-vision-values";
import { useInView } from "react-intersection-observer";
import { Animated } from "react-animated-css";

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
          {mvv.map((m) => (
            <Article key={m.id} content={m} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MissionVision;

function Article(props) {
  const { icon, id, title } = props.content;
  const { ref, inView, entry } = useInView({
    /* Optional options */
    rootMargin: "-0px",
    threshold: 0,
    // triggerOnce: true,
  });

  return (
    <div ref={ref} className="info-article-container">
      <Animated
        animationIn="headShake"
        animationOut="fadeOut"
        isVisible={inView}
      >
        {icon}

        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue
          quisque egestas diam in ar
        </p>
      </Animated>
    </div>
  );
}
