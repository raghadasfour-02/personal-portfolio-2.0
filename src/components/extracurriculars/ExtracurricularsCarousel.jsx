import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./extracurriculars.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

function ExtracurricularsCarousel() {
  return (
    <div className='carousel_container'>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <h4 >FOOD SUGGESTER</h4>
          </Item>

          <Item>
            <h4 >FOOD SUGGESTER</h4>
          </Item>
        </Carousel>
      </div>
  );
}

export default ExtracurricularsCarousel