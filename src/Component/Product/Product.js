import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings";
import { data } from "./data";
import FilterProduct from "./FilterProduct";
import { productData } from "./data2";
import { useProductsContext } from "../../context/ProductContext";
function Product() {
  const [products2, setproducts2] = useState(productData);
  const [input, setinput] = useState("");
  const [select, setSelect] = useState("all");
  const { productsDB } = useProductsContext();

  useEffect(() => {
    let sortedProduct = null;
    switch (select) {
      case "lowToHigh":
        sortedProduct = [...productData].sort(lowToHigh);
        setproducts2(sortedProduct);

        break;
      case "highToLow":
        sortedProduct = [...productData].sort(highToLow);
        setproducts2(sortedProduct);

        break;

      case "rating":
        sortedProduct = [...productData].sort(sortRating);
        setproducts2(sortedProduct);
        break;
      default:
        return;
    }
  }, [select]);

  function lowToHigh(a, b) {
    if (a.priceAfter < b.priceAfter) {
      return -1;
    }
    if (a.priceAfter > b.priceAfter) {
      return 1;
    }
    return 0;
  }

  function highToLow(a, b) {
    if (a.priceAfter < b.priceAfter) {
      return 1;
    }
    if (a.priceAfter > b.priceAfter) {
      return -1;
    }
    return 0;
  }
  function sortRating(a, b) {
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
    }
    return 0;
  }
  useEffect(() => {
    const item = productData.filter((product) => {
      if (input === "") {
        return product;
      } else if (product.name.toLowerCase().includes(input.toLowerCase())) {
        return product;
      }
    });
    setproducts2(item);
  }, [input]);

  function handleFilterInput(e) {
    setinput(e.target.value);
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
            products2={products2}
            setproducts2={setproducts2}
            productData={productData}
            setinput={setinput}
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
                <option onSelect={() => console.log("niama")} value="highToLow">
                  Price: high to low
                </option>
                <option value="lowToHigh">Price: low to high</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          <div className="product-grid">
            {products2.map((data) => (
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
        <img className="product-img" src={url}></img>
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
