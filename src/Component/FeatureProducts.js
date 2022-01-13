import React from "react";

function FeatureProducts() {
  return (
    <div className="container-background">
      <div className="feature-products-container">
        <div className="feature-products">
          <h2 className="title">Featured Products</h2>
          <div className="product-wrapper">
            <FeatureProductList />
            <FeatureProductList />
            <FeatureProductList />
          </div>
          <button className="btn-shop btn-view">View All Products</button>
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;

function FeatureProductList() {
  return (
    <div className="feature-product">
      <img src="/images/product/feature-test-2.jpg"></img>
      <div className="feature-product-detail">
        <h4>Shoe 1</h4>
        <span className="feature-product-price">RM599.99</span>
      </div>
    </div>
  );
}
