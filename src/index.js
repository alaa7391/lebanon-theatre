import React from "react";
import ReactDOM from "react-dom";
import RecipeReviewCard from "./card2";

//import "./styles.css";
import Card from "./cards";
//import Carousel2 from "./carousel2";
import { Carousel } from "./carousel";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "hsl(0, 69%, 43%)" }}>
      <Carousel />
      {/* <Card /> */}
      <RecipeReviewCard />
      <RecipeReviewCard />

      <RecipeReviewCard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
