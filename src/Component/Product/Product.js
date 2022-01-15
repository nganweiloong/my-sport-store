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
import { data } from "./data";
import FilterProduct from "./FilterProduct";

function Product() {
  const [products, setproducts] = useState(data);
  const [productsClone, setproductsClone] = useState(products);

  return (
    <div className="container-background">
      <div className="product-container fixed-container">
        <div className="product-search-wrapper">
          <h3>Available Products</h3>

          <div className="product-search">
            <input type="text" placeholder="Search..." />
            <button>
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
          </div>
          <button className="slider-filter-btn">
            <FontAwesomeIcon icon={faSlidersH} />
            <span>Filter</span>
          </button>
          <FilterProduct
            productsClone={productsClone}
            setproductsClone={setproductsClone}
            products={products}
            setproducts={setproducts}
            data={data}
          />
        </div>
        <div className="product-grid">
          {products.map((data) => (
            <ProductItem key={data.id} detail={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;

function ProductItem(props) {
  const [rating, setRating] = useState(2);
  const {
    id,
    brand,
    name,
    priceBefore,
    priceAfter,
    discount,
    productrating,
    category,
  } = props.detail;

  return (
    <div className="product-item">
      <div className="product-img-wrapper">
        <img className="product-img" src="/images/product/product-1.jpg"></img>
      </div>
      <h4 className="product-title">{name}</h4>
      <div className="product-price">
        <span className="product-price-before">RM{priceBefore.toFixed(2)}</span>
        <span className="product-price-after">RM{priceAfter}</span>
      </div>

      <div className="star-rating">
        <StarRatings
          className="star"
          starRatedColor={"hsl(38, 87%, 50%)"}
          rating={productrating}
          numberOfStars={5}
          starDimension="15px"
          starSpacing="0.2px"
        />
        <span>{category}</span>
      </div>
    </div>
  );
}
