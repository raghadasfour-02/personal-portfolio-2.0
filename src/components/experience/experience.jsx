import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id = 'experience'>
      <h5>Things I Know + Places I've Worked at</h5>
      <h1>EXPERIENCE</h1>
      <div className="container about__container">
        <div className="about__content">
          <div className="about_cards">
          <h4>DOCTORCARE</h4>
            <article className='about__card'>
              <h5>Software Developer</h5>
              <small>May 2022 - Aug 2022 <br /> 
              Tools: Python, Django, PostgreSQL, AWS
              </small>
            </article>

            <h4>DOCTORCARE</h4>
            <article className='about__card'>
              <h5>Software Developer</h5>
              <small>Sept 2021 - Dec 2021 <br /> 
              Tools: Python, Django, PostgreSQL
              </small>
            </article>

            <h4>NETACT SERVICES INC</h4>
            <article className='about__card'>
              <h5>Web Developer</h5>
              <small>Jan 2021 - Apr 2021 <br /> 
              Tools: Javascript, React
              </small>
            </article>

            <h4>TRILLIUM HEALTH PARTNERS</h4>
            <article className='about__card'>
              <h5>Software Engineer</h5>
              <small>Jan 2021 - Apr 2021 <br /> 
              Tools: PHP, Javascript, MySQL
              </small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience