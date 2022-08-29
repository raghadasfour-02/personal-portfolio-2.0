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
          <h4>EDUCATION</h4>
            <article className='about__card'>
              <h5>University of Waterloo</h5>
              <small>Systems Design Engineering (2020 - 2025) <br /> 
              Note-worthy Courses: SYDE 223 (Data Structures and Algorithms), SYDE 121 (Digital Computation)
              </small>
            </article>
            <article className='about__card'>
              <h5>Glenforest Seconday School</h5>
              <small>Ontario High School Diploma (2016-2020) <br /> 
              International Baccalaureate Diploma (42/45 points)
              </small>
            </article>

            <h4>INTERSTS</h4>
            <article className='about__card'>
              <h5>Reading</h5>
              <small>Novels, Autobiographies <br /> 
              Some of my current favourites: The Picture of Dorian Gray by Oscar Wilde <br /> 
              Surely You're Joking, Mr. Feynman! by Richard Feynman <br /> 
              Why Fish Don't Exist by Lulu Miller <br /> 
              Death of a Salesman by Arthur Miller <br /> 
              </small>
            </article>
            <article className='about__card'>
              <h5>Philosophy</h5>
              <small>Novels, Autobiographies <br /> 
              International Baccalaureate Diploma (42/45 points)
              </small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About