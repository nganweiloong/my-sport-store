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

function MainComponent() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default MainComponent;
