import React, { useState } from "react";
import Slider from "react-input-slider";
import { useProductsContext } from "../../context/ProductContext";

function FilterProduct() {
  const {
    brandUnique,
    brandFilter,
    handleFilterBrand,
    categoriesUnique,
    categoryFilter,
    handleFilterCategory,
    priceRange,
    setPriceRange,
    maxPrice,
    clearFilter,
  } = useProductsContext();

  return (
    <div className="filter-product">
      <div className="product-category">
        <h4>Category</h4>
        <ul>
          {categoriesUnique.map((category, i) => (
            <li key={i}>
              <button onClick={() => handleFilterCategory(category)}>
                <span
                  className={`${category === categoryFilter ? "selected" : ""}`}
                >
                  {category}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="product-brand">
        <h4>Brand</h4>
        {
          <ul>
            {brandUnique.map((category, i) => (
              <li key={i}>
                <button onClick={() => handleFilterBrand(category)}>
                  <span
                    className={`${category === brandFilter ? "selected" : ""}`}
                  >
                    {category}
                  </span>
                </button>
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
          xmax={Math.ceil(maxPrice)}
          onChange={({ x }) => {
            setPriceRange((priceRange) => ({ ...priceRange, x }));
          }}
        />
        <p>RM0 - RM{priceRange.x}</p>
      </div>
      <button onClick={clearFilter} className="btn-shop btn-filter">
        Clear Filter
      </button>
    </div>
  );
}

export default FilterProduct;
