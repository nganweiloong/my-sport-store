import React from "react";
import FeatureProducts from "./Component/FeatureProducts";
import Nav from "./Component/Nav";
import Poster from "./Component/Poster";

function MainComponent() {
  return (
    <div className="container">
      <header>
        <Nav />
      </header>
      <main>
        <Poster /> <FeatureProducts />
      </main>
    </div>
  );
}

export default MainComponent;
