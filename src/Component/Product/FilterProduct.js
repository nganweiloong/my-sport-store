import React, { useState, useEffect } from "react";
import Slider from "react-input-slider";

function FilterProduct({ setproducts2, productData, setinput }) {
  const categories = productData.map((data) => data.category);
  const categoriesUnique = ["All", ...new Set(categories)];
  const brandUnique = [
    "All",
    ...new Set(productData.map((data) => data.brand)),
  ];
  const price = productData.map((data) => data.priceAfter);
  const maxPrice = Math.max(...price);

  //   const [priceRange, setPriceRange] = useState({ x: maxPrice });
  const [priceRange, setPriceRange] = useState({ x: maxPrice });

  //filter-------------------------------------
  const [categoryFilter, setCategoryFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  //filter-------------------------------------
  const filterByBrand = (data) => {
    if (brandFilter) {
      return data.brand === brandFilter;
    }
    return data;
  };

  const filterByCategory = (data) => {
    if (categoryFilter) {
      return data.category === categoryFilter;
    }
    return data;
  };

  const filterByPrice = (product) => {
    return product.priceAfter <= Math.ceil(priceRange.x);
  };

  useEffect(() => {
    const newItem = productData
      .filter(filterByBrand)
      .filter(filterByCategory)
      .filter(filterByPrice);

    setproducts2(newItem);
  }, [priceRange]);

  useEffect(() => {
    const newItem = productData.filter(filterByBrand).filter(filterByCategory);

    setproducts2(newItem);
  }, [categoryFilter, brandFilter]);

  function handleFilterBrand(brand) {
    if (brand === "All") {
      setBrandFilter("");
    } else {
      setBrandFilter(brand);
    }
  }
  function handleFilterCategory(category) {
    if (category === "All") {
      setCategoryFilter("");
    } else {
      setCategoryFilter(category);
    }
  }

  function clearFilter() {
    setBrandFilter("");
    setCategoryFilter("");
    setproducts2(productData);
    setinput("");
    setPriceRange({ x: maxPrice });
  }

  return (
    <div className="filter-product">
      {/* <h5>CurrentFilter!</h5>
      <code>{categoryFilter}</code>
      <code>{brandFilter}</code> */}

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
