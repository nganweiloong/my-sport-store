import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdjust,
  faFileSignature,
  faFilter,
  faSearch,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings";

function Product() {
  return (
    <div className="container-background">
      <div className="product-container fixed-container">
        <form className="product-search-wrapper">
          <h3>Available Products</h3>
          <div className="product-search">
            <input type="text" placeholder="Search..." />
            <button>
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
          </div>
          <button className="slider-filter">
            <FontAwesomeIcon icon={faSlidersH} />
            <span>Filter</span>
          </button>
        </form>
        <div className="product-grid">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default Product;

function ProductItem() {
  const [rating, setRating] = useState(2);

  return (
    <div className="product-item">
      <div className="product-img-wrapper">
        <img className="product-img" src="/images/product/product-1.jpg"></img>
      </div>
      <h4 className="product-title">FELET POWER CUSHION MENS RED</h4>
      <div className="product-price">
        <span className="product-price-before">RM999.99</span>
        <span className="product-price-after">RM666.99</span>
      </div>
      <div className="star-rating">
        <StarRatings
          className="star"
          starRatedColor={"hsl(38, 87%, 50%)"}
          rating={2}
          numberOfStars={5}
          starDimension="15px"
          starSpacing="0.2px"
        />
        <span>1.3k Sold</span>
      </div>
    </div>
  );
}
