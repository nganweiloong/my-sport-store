import React, { useState, useEffect } from "react";
import { data } from "./data";
import Slider from "react-input-slider";

function FilterProduct() {
  const categories = data.map((data) => data.category);
  const categoriesUnique = ["All", ...new Set(categories)];
  const brandUnique = ["All", ...new Set(data.map((data) => data.brand))];
  const price = data.map((data) => data.priceAfter);
  const maxPrice = Math.max(...price);

  console.log(maxPrice);
  //   const [priceRange, setPriceRange] = useState({ x: maxPrice });
  const [priceRange, setPriceRange] = useState({ x: maxPrice });

  return (
    <div className="filter-product">
      <div className="product-category">
        <h4>Category</h4>
        <ul>
          {categoriesUnique.map((category) => (
            <li>
              <button>{category}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="product-brand">
        <h4>Brand</h4>
        {
          <ul>
            {brandUnique.map((category) => (
              <li>
                <button>{category}</button>
              </li>
            ))}
          </ul>
        }
      </div>
      <div className="product-price-range">
        <h4>Price</h4>

        <Slider
          axis="x"
          x={priceRange.x}
          xmax={maxPrice}
          onChange={({ x }) =>
            setPriceRange((priceRange) => ({ ...priceRange, x }))
          }
        />
        <p>RM0 - RM{priceRange.x}</p>
      </div>
      <button className="btn-shop btn-filter">Clear Filter</button>
    </div>
  );
}

export default FilterProduct;
