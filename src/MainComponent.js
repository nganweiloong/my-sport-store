import React from "react";
import Nav from "./Component/Nav";
import Poster from "./Component/Poster";

function MainComponent() {
  return (
    <div className="container">
      <header>
        <Nav />
      </header>
      <main>
        <Poster />{" "}
      </main>
    </div>
  );
}

export default MainComponent;
