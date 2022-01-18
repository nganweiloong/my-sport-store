import React, { useState, useEffect, useContext } from "react";
import { fs } from "../../Config/firebase";

const ProductsContext = React.createContext();
export function useProductsContext() {
  return useContext(ProductsContext);
}
function ProductsPovider({ children }) {
  const [productsDB, setProductsDB] = useState([]);
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
  });

  const value = { productsDB };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsPovider;
