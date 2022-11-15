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
            <small>
            I got the privilege of giving a TED-ed Talk about quantum mechanics. I chose to focus this talk on double slit experiment to spark an interest in the audience  about the elegance of the world of quantum mechanics. 
            As said by one of my favourite physicists, Richard Feynman, the double slit experiment captures the entire mystery of quantum mechanics and impressively demonstrates the wave nature of light and the phenomenon of interference. Why does this matter you may ask? Quantum was initially developed to provide a better explanation and description of the atom, hence, by exploring the behaviour of atoms we are learning more about the fundamental base unit of our world. Atoms make up everything. So by delving into the quantum world, we come to understand how the world around us operates. 
            </small>
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