import React, { useState, useEffect, useContext } from "react";
import { fs } from "../Config/firebase";

const ProductsContext = React.createContext();
export function useProductsContext() {
  return useContext(ProductsContext);
}
function ProductsPovider({ children }) {
  const [productsDB, setProductsDB] = useState([]);
  const [products, setProducts] = useState([]);
  const [select, setSelect] = useState("all");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const getProducts = async () => {
    const products = await fs.collection("sportproducts").get();
    // await print(products);
    const productsArray = [];
    products.docs.forEach((snap) => {
      const data = snap.data();
      data.ID = snap.id;
      productsArray.push({ ...data });
      if (productsArray.length === products.docs.length) {
        setProductsDB(productsArray);
      }
    });
  };
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log("assigning to products from DB,setting isloading to false..");
    setProducts(productsDB);
    setIsLoading(false);
    console.log(isLoading);
  }, [productsDB]);
  // filter product------------------------------------------------------
  useEffect(() => {
    let sortedProduct = null;

    switch (select) {
      case "lowToHigh":
        sortedProduct = [...productsDB].sort(lowToHigh);
        setProducts(sortedProduct);

        break;
      case "highToLow":
        sortedProduct = [...productsDB].sort(highToLow);
        setProducts(sortedProduct);

        break;

      case "rating":
        sortedProduct = [...productsDB].sort(sortRating);
        setProducts(sortedProduct);
        break;
      default:
        return;
    }
  }, [select]);

  const FilterByName = (product) => {
    if (input === "") {
      return product;
    } else if (product.name.toLowerCase().includes(input.toLowerCase())) {
      return product;
    }
  };

  useEffect(() => {
    const item = productsDB.filter(FilterByName);
    setProducts(item);
  }, [input]);

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
  // filter product------------------------------------------------------
  const value = {
    productsDB,
    setProductsDB,
    products,
    setProducts,
    setSelect,
    select,
    input,
    setInput,
    isLoading,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsPovider;
