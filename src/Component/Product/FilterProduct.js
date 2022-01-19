import React, { useState, useEffect } from "react";
import Slider from "react-input-slider";
import { useProductsContext } from "../../context/ProductContext";

function FilterProduct({ setinput }) {
  const {
    productsDB,
    setProductsDB,
    products,
    setProducts,
    setSelect,
    select,
    input,
    setInput,
    isLoading,
    // categoriesUnique,
    // brandUnique,
    // priceRange
  } = useProductsContext();
  const categories = productsDB.map((data) => data.category);
  const categoriesUnique = ["All", ...new Set(categories)];
  const brandUnique = ["All", ...new Set(productsDB.map((data) => data.brand))];
  const price = productsDB.map((data) => data.priceAfter);
  const maxPrice = Math.max(...price);
  const [priceRange, setPriceRange] = useState({ x: 0 });
  //filter-------------------------------------
  const [categoryFilter, setCategoryFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  //filter-------------------------------------

  useEffect(() => {
    setPriceRange({
      x: Math.max(...productsDB.map((data) => data.priceAfter)),
    });
  }, [productsDB]);

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

  const handleFilterBrand = (brand) => {
    if (brand === "All") {
      setBrandFilter("");
    } else {
      setBrandFilter(brand);
    }
  };
  const handleFilterCategory = (category) => {
    if (category === "All") {
      setCategoryFilter("");
    } else {
      setCategoryFilter(category);
    }
  };

  useEffect(() => {
    const newItem = productsDB
      .filter(filterByBrand)
      .filter(filterByCategory)
      .filter(filterByPrice);
    setProducts(newItem);
  }, [categoryFilter, brandFilter, priceRange]);

  function clearFilter() {
    setBrandFilter("");
    setCategoryFilter("");
    setProducts(productsDB);
    setInput("");
    setPriceRange({ x: maxPrice });
  }

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
