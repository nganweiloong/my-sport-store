import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdjust,
  faFileSignature,
  faFilter,
  faSearch,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";

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

          <div className="product-grid">
            <div className="box box1">box1</div>
            <div className="box box2">box2</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
