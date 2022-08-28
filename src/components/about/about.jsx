import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id = 'about'>
      <h5>Get to Know Me</h5>
      <h1>ABOUT ME</h1>
      
      <div className="container about__container">
        <div className="about__content">
          <div className="about_cards">
            <article className='about__card'>
              <h5>Experience</h5>
              <small>yeah i guess</small>
            </article>

            <article className='about__card'>
              <h5>Experience</h5>
              <small>yeah i guess</small>
            </article>

            <article className='about__card'>
              <h5>Experience</h5>
              <small>yeah i guess</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About