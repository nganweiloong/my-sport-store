import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings";
import FilterProduct from "./FilterProduct";
import { productData } from "./data2";
import { useProductsContext } from "../../context/ProductContext";
function Product() {
  const [products2, setproducts2] = useState(productData);

  const {
    productsDB,
    setProductsDB,
    products,
    setProducts,
    select,
    setSelect,
    input,
    setInput,
  } = useProductsContext();

  function handleFilterInput(e) {
    setInput(e.target.value);
  }

  return (
    <div className="container-background">
      <div className="product-container fixed-container">
        <div className="product-search-wrapper">
          <h3>Available Products</h3>

          <div className="product-search">
            <input
              value={input}
              onChange={(e) => handleFilterInput(e)}
              type="text"
              placeholder="Search..."
            />
            <button>
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
          </div>
          <button className="slider-filter-btn">
            <FontAwesomeIcon icon={faSlidersH} />
            <span>Filter</span>
          </button>
          <FilterProduct
            setproducts2={setproducts2}
            productData={productData}
            setInput={setInput}
          />
        </div>

        <div className="product-grid-container">
          <div className="sorting">
            <h4>{products2?.length} items found</h4>
            <div className="line"></div>
            <div>
              <select
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="highToLow">Price: high to low</option>
                <option value="lowToHigh">Price: low to high</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          <div className="product-grid">
            {products.map((data) => (
              <ProductItem key={data.id} detail={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

function ProductItem(props) {
  const [Srating, setSRating] = useState(2);
  const {
    id,
    brand,
    name,
    priceBefore,
    priceAfter,
    discount,
    rating,
    category,
    url,
  } = props.detail;

  return (
    <div className="product-item">
      <div className="product-img-wrapper">
        <img className="product-img"></img>
      </div>
      <h4 className="product-title">{name}</h4>
      <div className="product-price">
        <span className="product-price-before">RM{priceBefore}</span>
        <span className="product-price-after">RM{priceAfter}</span>
      </div>

      <div className="star-rating">
        <StarRatings
          className="star"
          starRatedColor={"hsl(38, 87%, 50%)"}
          rating={rating}
          numberOfStars={5}
          starDimension="15px"
          starSpacing="0.2px"
          half={true}
        />
        <span>{rating}</span>
      </div>
    </div>
  );
}
