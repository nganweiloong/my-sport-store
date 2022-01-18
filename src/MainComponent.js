import React from "react";
import Footer from "./Component/Footer";
import Nav from "./Component/Nav";
import { useAuth } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Product from "./Component/Product/Product";
import Login from "./Component/Pages/Login";
import Signup from "./Component/Pages/Signup";
import CartPage from "./Component/Pages/CartPage";
import NoFound from "./Component/Pages/NoFound";
import ScrollToTop from "./Component/ScrollToTop";

function MainComponent() {
  const { currentUser } = useAuth();
  return (
    <BrowserRouter>
      <Nav />
      <div className="main">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/:anyPages" element={<NoFound />} />

            {true && <Route path="/cart" element={<CartPage />} />}
          </Routes>
        </ScrollToTop>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default MainComponent;
