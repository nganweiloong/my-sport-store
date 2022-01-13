import React from "react";
import FeatureProducts from "./Component/FeatureProducts";
import MissionVision from "./Component/MissionVision";
import Nav from "./Component/Nav";
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
      </main>
    </div>
  );
}

export default MainComponent;
