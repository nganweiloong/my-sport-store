import React from "react";
import { Link } from "react-router-dom";
import { featureProduct } from "../../Product/data2";
import { useInView } from "react-intersection-observer";
import { Animated } from "react-animated-css";

function FeatureProducts() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    rootMargin: "-0px",
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="container-background">
      <div className="feature-products-container">
        <div ref={ref} className="feature-products">
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={inView}
          >
            {" "}
            <h2 className="title">Featured Products</h2>{" "}
          </Animated>
          <div className="product-wrapper">
            {featureProduct.map((prod, i) => (
              <FeatureProductList key={i} {...prod} />
            ))}
          </div>
          <Link to="/products">
            <button className="btn-shop btn-view">View All Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;

function FeatureProductList({ name, priceAfter, url }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    rootMargin: "-20px",
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="feature-product">
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={inView}>
        <img src={url}></img>
        <div className="feature-product-detail">
          <h4>{name}</h4>
          <span className="feature-product-price">RM{priceAfter}</span>
        </div>
      </Animated>
    </div>
  );
}
