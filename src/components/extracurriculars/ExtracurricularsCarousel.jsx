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
            <small style={{padding: "5%", fontSize: "0.9rem"}}><b>Quantum Mechanics TED-Ed Talk</b><br></br> <br></br>
            I got the privilege of giving a TED-Ed Talk about quantum mechanics. I chose to focus this talk on the double slit experiment to spark an interest in the audience and provide an insight into the elegance of the world of quantum mechanics. 
            <br></br><br></br>As said by one of my favourite physicists, Richard Feynman, the double slit experiment captures the entire mystery of quantum mechanics and impressively demonstrates the wave nature of light and the phenomenon of interference. Why does this matter you may ask? Quantum was initially developed to provide a better explanation and description of the atom, hence, by exploring the behaviour of atoms we are learning more about the fundamental base unit of our world. Atoms make up everything. So by delving into the quantum world, we come to understand how the world around us operates. 
            </small>
            <img style={{ width: 400, height: 400, borderRadius: "8%" }} src={quantum_mechanics_talk}></img>
          </Item>

          <Item>
          <small style={{padding: "5%", fontSize: "0.9rem"}}><b>Hosting the Largest Student-run Conference in Canada</b>
            <br></br> <br></br>
            As the Glenforest STEM president, I got the privilege of leading a team of bright, hard-working individuals that are looking to spread their &hearts; for STEM. <br></br> <br></br>
            In 2018, we held the largest student-run conference in Canada.
            We hosted the Xplore STEM conference to encourage and expose students to the educational and career pathways in the STEM fields. The Xplore STEM Conference invited students to explore and develop a love for the Science, Engineering, Technology, and Math (STEM) fields. Featuring a multitude of speakers, workshops, booths, and activities, students will be exposed to the limitless opportunities the STEM fields have to office.
            </small>
            <img style={{ width: 400, height: 400, borderRadius: "8%" }} src={stem_photo}></img>
          </Item>

          <Item>
            <small style={{padding: "5%", fontSize: "0.9rem"}}><b>My Love for the Theatrical Arts</b>
            <br></br> <br></br>
            Outside of engineering, I’m a thespian at heart. In Spring of 2022, I got the privilege of playing ‘Alia’, a lead role as part of <i>Castaway</i>. This initiative was hosted by Engplay, an engineering-run play at the University of Waterloo. 
            </small>
            <img style={{ width: 400, height: 400, borderRadius: "8%" }} src={thespain}></img>
          </Item>
        </Carousel>
      </div>
  );
}

export default ExtracurricularsCarousel