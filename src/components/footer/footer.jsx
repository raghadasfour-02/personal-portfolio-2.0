import React from 'react'
import './footer.css'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>RAGHAD ASFOUR</a>

      <ul className="permalinks">
        <li><a href="#">HOME</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#extracurriculars">EXTRACURRICULARS</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://github.com/raghadasfour-02"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/raghadasfour/"><AiFillLinkedin/></a>
      </div>

      <div className='footer_copyright'>
        &copy; Coded and Designed by Raghad Asfour
      </div>
    </footer>
  )
}

export default Footer