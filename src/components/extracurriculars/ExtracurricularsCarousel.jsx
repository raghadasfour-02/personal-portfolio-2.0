import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./extracurriculars.css";
import quantum_mechanics_talk from './quantum_mechanics_talk.png';
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
            <small>Quantum Mechanics Talk<br></br>
            I got the privilege of giving a TED-ed Talk about quantum mechanics. I chose to focus this talk on double slit experiment to spark an interest in the audience  about the elegance of the world of quantum mechanics. 
            As said by one of my favourite physicists, Richard Feynman, the double slit experiment captures the entire mystery of quantum mechanics and impressively demonstrates the wave nature of light and the phenomenon of interference. Why does this matter you may ask? Quantum was initially developed to provide a better explanation and description of the atom, hence, by exploring the behaviour of atoms we are learning more about the fundamental base unit of our world. Atoms make up everything. So by delving into the quantum world, we come to understand how the world around us operates. 
            </small>
            <img style={{ width: 300, height: 300, borderRadius: "15%" }} src={quantum_mechanics_talk}></img>
          </Item>

          <Item>
          <small>Hosting the Largest Student-run Conference in Canada <br></br>
            I got the privilege of running the largest student run conference in Canada as part of the Glenforest STEM team.
            We hosted the Xplore STEM conference 2018 to encourage and expose students to the educational and career pathways in the STEM fields. The Xplore STEM Conference invited students to explore and develop a love for the Science, Engineering, Technology, and Math (STEM) fields. Featuring a multitude of speakers, workshops, booths, and activities, students will be exposed to the limitless opportunities the STEM fields have to office.
            </small>
            <img style={{ width: 300, height: 300, borderRadius: "15%" }} src={stem_photo}></img>
          </Item>

          <Item>
            <small> My Love for the Theatrical Arts <br></br>
            Outside of engineering, I’m a thespian at heart. In Spring of 2022, I got the privilege of playing ‘Alia’, a lead role as part of _Castaway_. This initiative was hosted by Engplay, an engineering-run play at the University of Waterloo. 
            </small>
            <img style={{ width: 300, height: 300, borderRadius: "15%" }} src={thespain}></img>
          </Item>
        </Carousel>
      </div>
  );
}

export default ExtracurricularsCarousel