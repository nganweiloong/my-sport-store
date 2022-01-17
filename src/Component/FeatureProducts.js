import React from "react";
import { Link } from "react-router-dom";
import { featureProduct } from "./Product/data2";

function FeatureProducts() {
  return (
    <div className="container-background">
      <div className="feature-products-container">
        <div className="feature-products">
          <h2 className="title">Featured Products</h2>
          <div className="product-wrapper">
            {featureProduct.map((prod, i) => (
              <FeatureProductList keys={i} {...prod} />
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
  return (
    <div className="feature-product">
      <img src={url}></img>
      <div className="feature-product-detail">
        <h4>{name}</h4>
        <span className="feature-product-price">RM{priceAfter}</span>
      </div>
    </div>
  );
}
