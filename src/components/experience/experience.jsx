import React from 'react'
import './experience.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import CarouselApp from './ProjectsCarousel'

const Experience = () => {
  return (
    <section id = 'experience'>
      <h5>Things I Know + Places I've Worked at</h5>
      <h1>EXPERIENCE</h1>

      <div className="container experience__container">
        <div className="experience__work">
          <h4>DoctorCare (May 2022 - Aug 2022)</h4>
            <article className='experience__details'>
              < AiOutlineArrowRight className='experience__details-icon' />
              <h4>Software Developer</h4>
              <h4 style={{color: "var(--color-neon-green)"}}>Python, Django, SQL, AWS</h4>
            </article>

          <br></br>
          <h4>DoctorCare (Sept 2021 - Dec 2021)</h4>
            <article className='experience__details'>
              < AiOutlineArrowRight className='experience__details-icon' />
              <h4>Software Developer</h4>
              <h4 style={{color: "var(--color-neon-green)"}}>Python, Django, SQL</h4>
            </article>
          
          <br></br>
          <h4>Netact Inc (Jan 2021 - Apr 2021)</h4>
            <article className='experience__details'>
              < AiOutlineArrowRight className='experience__details-icon' />
              <h4>Web Developer</h4>
              <h4 style={{color: "var(--color-neon-green)"}}>Javascript, HTML, CSS</h4>
            </article>
        </div>
      </div>
      < CarouselApp />
    </section>
  )
}

export default Experience