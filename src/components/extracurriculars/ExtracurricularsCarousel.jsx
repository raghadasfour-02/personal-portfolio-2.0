import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./extracurriculars.css";
import quantum_mechanics_talk from './quantum_mechanics_talk.jpg';
import thespain from './thespian.jpg';
import stem_photo from './stem_photo.png';

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
            <small>Quantum Mechanics Talk</small>
            <img src={quantum_mechanics_talk}></img>
          </Item>

          <Item>
            <h4>Hosting the Largest Student-run Conference in Canada</h4>
            <img src={stem_photo}></img>
          </Item>

          <Item>
            <h4>My Love for the Theatrical Arts</h4>
            <img src={thespain}></img>
          </Item>
        </Carousel>
      </div>
  );
}

export default ExtracurricularsCarousel