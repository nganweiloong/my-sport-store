import React from "react";
import FeatureProducts from "./FeatureProducts";
import MissionVision from "./MissionVision";
import Newsletter from "./Newsletter";
import Poster from "./Poster";
function Home() {
  return (
    <React.Fragment>
      <Poster />
      <FeatureProducts />
      <MissionVision />
      <Newsletter />
    </React.Fragment>
  );
}

export default Home;
