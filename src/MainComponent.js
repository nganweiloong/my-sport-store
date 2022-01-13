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

function MainComponent() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default MainComponent;
