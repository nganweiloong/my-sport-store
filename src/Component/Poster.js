import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slidedata from "./Slidedata";

function Poster() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (currentSlide === slidedata.length + 1) {
      setCurrentSlide(1);
    }
  }, [currentSlide]);
  function active(id) {
    switch (id) {
      case currentSlide:
        return "activeSlide";
        break;
      case currentSlide - 1:
        return "lastSlide";
        break;
      case currentSlide + 1:
        return "nextSlide";
        break;
      case slidedata.length:
        return "lastSlide";
        break;
      case 1:
        return "nextSlide";
        break;

      default:
        return;
    }
  }

  function handleNext() {
    setCurrentSlide((s) => s + 1);
  }

  return (
    <div className="poster-container">
      <article>
        <div className="info">
          <div className="content">
            <h2>Welcome to WLSE</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue
              quisque egestas diam in arcu cursus euismod quis. Tristique magna
              sit amet purus gravida quis blandit.
            </p>

            <Link to="/products">
              {" "}
              <button className="btn-shop">Shop Now!</button>
            </Link>
          </div>
        </div>
        <div className="feature-info">
          {slidedata.map((slide) => {
            const { id } = slide;
            return (
              <img
                key={id}
                className={`slides ${active(id)}`}
                src={slide.src}
              ></img>
            );
          })}
        </div>
      </article>
    </div>
  );
}

export default Poster;
