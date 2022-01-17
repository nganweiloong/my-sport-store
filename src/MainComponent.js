import React from "react";
import FeatureProducts from "./Component/FeatureProducts";
import Footer from "./Component/Footer";
import MissionVision from "./Component/MissionVision";
import Nav from "./Component/Nav";
import Newsletter from "./Component/Newsletter";
import Poster from "./Component/Poster";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Product from "./Component/Product/Product";
import Login from "./Component/Pages/Login";
import Signup from "./Component/Pages/Signup";
import CartPage from "./Component/Pages/CartPage";
import NoFound from "./Component/Pages/NoFound";

function MainComponent() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/:anyPages" element={<NoFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default MainComponent;
