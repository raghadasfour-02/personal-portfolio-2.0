import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./ProjectItem";
import {FoodImage} from "../../assets/food.png"
import "./experience.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function CarouselApp() {
  return (
    <div className='carousel_container'>
    <h1 style={{ textAlign: "center" }}>PROJECTS</h1>
      <div className="App">

        <Carousel breakPoints={breakPoints}>
          <Item animated className="food_suggester_project">
            <h4 style={{ color: "black", fontWeight:"bold"}}>FOOD SUGGESTER</h4>
          </Item>

          <Item animated className="news_aggregator_project">
            <h4 style={{ color: "black", fontWeight:"bold"}}>NEWS AGGREGATOR</h4>
          </Item>

          <Item animated className="resume_parser_project">
            <h4 style={{ color: "black", fontWeight:"bold"}}>RESUME PARSER</h4>
          </Item>

          <Item animated className="go_shelf_project">
            <h4 style={{ color: "black", fontWeight:"bold"}}>GO SHELF</h4>
          </Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselApp