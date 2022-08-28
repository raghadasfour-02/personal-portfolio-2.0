import React from 'react'
import './experience.css'
import {AiOutlineArrowRight} from 'react-icons/ai'

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

        <div className="experience__projects">
          <h3>Projects</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              < AiOutlineArrowRight className='experience__details-icon' />
              <div>
              <h4>Personal Portfolio</h4>
              <h5>React</h5>
              </div>
            </article>

            <article className='experience__details'>
              < AiOutlineArrowRight className='experience__details-icon' />
              <div>
              <h4>Movie Critic Blog</h4>
              <h5>Python, Django</h5>
              </div>
            </article>

            <article className='experience__details'>
              < AiOutlineArrowRight className='experience__details-icon' />
              <div>
              <h4>News Aggregator</h4>
              <h5>Python, Django</h5>
              </div>
            </article>

            <article className='experience__details'>
              < AiOutlineArrowRight className='experience__details-icon' />
              <div>
              <h4>Food Suggester</h4>
              <h5>React, Javascript</h5>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience