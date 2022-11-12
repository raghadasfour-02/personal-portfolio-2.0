import React from 'react'
import './extracurriculars.css'
import ExtracurricularsCarousel from './ExtracurricularsCarousel.jsx'


const Extracurriculars = () => {
  return (
    <section id = 'extracurriculars'>
        <h5>Cool Stuff I've Done</h5>
        <h1>EXTRACURRICULARS</h1>
      <div className="container about__container">
        {/* Talk about quantum mechanics talk */}
        {/* Talk about running stem conference */}
        {/* talk about play, love for theatrical arts */}
        < ExtracurricularsCarousel />
        </div>
    </section>
  )
}
export default Extracurriculars