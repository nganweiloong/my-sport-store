import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings";
import FilterProduct from "./FilterProduct";
import { useProductsContext } from "../../context/ProductContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { fs } from "../../Config/firebase";
function Product() {
  const { products, select, setSelect, input, setInput } = useProductsContext();

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
          <FilterProduct />
        </div>

        <div className="product-grid-container">
          <div className="sorting">
            <h4>{products?.length} items found</h4>
            <div className="line"></div>
            <div>
              <select
                className="sort-select"
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="highToLow">Price: High to Low</option>
                <option value="lowToHigh">Price: Low to High</option>
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
  const [showAddNoti, setShowAddNoti] = useState(false);
  const { name, priceBefore, priceAfter, discount, rating, url } = props.detail;
  const navigate = useNavigate();
  const { uuid } = useAuth();

  let Product;
  function handleAddCart(product) {
    if (uuid !== null) {
      Product = product;
      Product["quantity"] = 1;
      Product["TotalProductPrice"] = Product.quantity * Product.priceAfter;
      fs.collection("Cart " + uuid)
        .doc(product.ID)
        .set(Product);

      setShowAddNoti(true);
      setTimeout(() => {
        setShowAddNoti(false);
      }, 500);
    } else {
      alert("Please login first ");
      navigate("/login");
    }
  }

  return (
    <div className="product-item">
      <div className={`add-cart-noti ${showAddNoti && "show-add-cart-noti"}`}>
        Added to cart
      </div>
      <div>
        <div className="product-img-wrapper">
          <div className="product-offer">
            <span className="discount-amount">{discount}%</span> OFF!
          </div>
          <img className="product-img" src={url} alt={name}></img>
        </div>
        <h4 className="product-title">{name}</h4>
      </div>
      <div className="product-detail-wrapper">
        <div className="product-price">
          <span className="product-price-before">RM{priceBefore}</span>
          <span className="product-price-after">RM{priceAfter.toFixed(2)}</span>
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
        <button
          onClick={() => handleAddCart(props.detail)}
          className="btn-shop btn-addcart"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
