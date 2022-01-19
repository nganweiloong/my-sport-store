import React, { useState, useEffect, useContext } from "react";
import { fs } from "../Config/firebase";

const LocalProductsContext = React.createContext();
export function useLocalProductsContext() {
  return useContext(LocalProductsContext);
}
function LocalProductsProvider({ children }) {
  const value = {};
  return (
    <LocalProductsContext.Provider value={value}>
      {children}
    </LocalProductsContext.Provider>
  );
}

export default LocalProductsProvider;
