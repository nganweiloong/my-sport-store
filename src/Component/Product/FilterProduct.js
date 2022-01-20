import React, { useState, useEffect } from "react";
import Slider from "react-input-slider";
import { useProductsContext } from "../../context/ProductContext";

function FilterProduct({ showFilter }) {
  const [categorySelected, setcategorySelected] = useState("All");
  const [brandSelected, setBrandSelected] = useState("All");

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

  useEffect(() => {
    clearFilter();
  }, []);
  return (
    <div className={`filter-product ${showFilter && "show-filter-product"}`}>
      <div className="product-category">
        <h4>Category</h4>
        <ul>
          {categoriesUnique.map((category, i) => (
            <li key={i}>
              <button
                onClick={() => {
                  handleFilterCategory(category);
                  setcategorySelected(category);
                }}
              >
                <span
                  className={`${
                    category === categorySelected ? "selected" : ""
                  }`}
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
            {brandUnique.map((brand, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    handleFilterBrand(brand);
                    setBrandSelected(brand);
                  }}
                >
                  <span
                    className={`${brand === brandSelected ? "selected" : ""}`}
                  >
                    {brand}
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
      <button
        onClick={() => {
          clearFilter();
          setBrandSelected("All");
          setcategorySelected("All");
        }}
        className="btn-shop btn-filter"
      >
        Clear Filter
      </button>
    </div>
  );
}

export default FilterProduct;
