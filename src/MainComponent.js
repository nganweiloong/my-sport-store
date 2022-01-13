import React from "react";
import FeatureProducts from "./Component/FeatureProducts";
import MissionVision from "./Component/MissionVision";
import Nav from "./Component/Nav";
import Newsletter from "./Component/Newsletter";
import Poster from "./Component/Poster";

function MainComponent() {
  return (
    <div className="container">
      <header>
        <Nav />
      </header>
      <main>
        <Poster />
        <FeatureProducts />
        <MissionVision />
        <Newsletter />
      </main>
      <footer></footer>
    </div>
  );
}

export default MainComponent;
