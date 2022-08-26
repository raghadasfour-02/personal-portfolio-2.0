import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <div class="social-menu">
        <ul>
            <li><a href="https://www.linkedin.com/in/raghadasfour" target="_blank"><AiFillLinkedin size={30} color="#0a192f"/></a></li>
            <li><a href="https://github.com/raghadasfour-02" target="_blank"><AiFillGithub size={30} color="#0a192f"/></a></li>
            <li><a href="mailto: raghadasfour.74@gmail.com"target="_blank"><AiOutlineMail size={30} color="#0a192f"/></a></li>
        </ul>
        </div>
    </div>
  )
}

export default HeaderSocials