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
  const [sidebarShow, setSidebarShow] = useState(false);
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

  //filter-------------------------------------
  const categories = productsDB.map((data) => data.category);
  const categoriesUnique = ["All", ...new Set(categories)];
  const brandUnique = ["All", ...new Set(productsDB.map((data) => data.brand))];
  const price = productsDB.map((data) => data.priceAfter);
  const maxPrice = Math.max(...price);
  const [priceRange, setPriceRange] = useState({ x: 0 });
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [brandFilter, setBrandFilter] = useState(null);
  const [isAllSelected, setisAllSelected] = useState(true);

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

  const filterByName = (product) => {
    if (input === "") {
      return product;
    } else if (product.name.toLowerCase().includes(input.toLowerCase())) {
      return product;
    }
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
      .filter(filterByPrice)
      .filter(filterByName);
    setProducts(newItem);
  }, [categoryFilter, brandFilter, priceRange, input]);

  function clearFilter() {
    setBrandFilter("");
    setCategoryFilter("");
    setProducts(productsDB);
    setInput("");
    setPriceRange({ x: maxPrice });
  }

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
    //filter-------------------------------------
  }

  // sidebar show

  // sidebar show

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
    sidebarShow,
    setSidebarShow,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsPovider;
