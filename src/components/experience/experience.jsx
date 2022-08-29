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
          <h3>Work Experience</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              < AiOutlineArrowRight className='experience__details-icon' />
              <div>
              <h4>Software Developer</h4>
              <small className='text-light'>DoctorCare</small>
              <h5>Python, Django, SQL, AWS</h5>
              </div>
            </article>

            <article className='experience__details'>
              < AiOutlineArrowRight className='experience__details-icon' />
              <div>
              <h4>Software Developer</h4>
              <small className='text-light'>DoctorCare</small>
              <h5>Python, Django, SQL</h5>
              </div>
            </article>

            <article className='experience__details'>
              < AiOutlineArrowRight className='experience__details-icon' />
              <div>
              <h4>Web Developer</h4>
              <small className='text-light'>Netact Inc.</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      < CarouselApp />
    </section>
  )
}

export default Experience