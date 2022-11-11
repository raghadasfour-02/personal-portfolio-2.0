import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <div class="social-menu">
        <ul>
            <li><a href="https://www.linkedin.com/in/raghadasfour/"><AiFillLinkedin size={30} color="#0a192f"/></a></li>
            <li><a href="https://github.com/raghadasfour-02"><AiFillGithub size={30} color="#0a192f"/></a></li>
            <li><a href="mailto: raghadasfour.74@gmail.com"><AiOutlineMail size={30} color="#0a192f"/></a></li>
        </ul>
        </div>
    </div>
  )
}

export default HeaderSocials