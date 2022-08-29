import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'
import Programmer from '../../assets/programmer.png'
import aws from '../../assets/aws.png'
import django from '../../assets/django.png'
import python from '../../assets/python.png'
import javascript from '../../assets/javascript.png'
import cpp from '../../assets/cpp.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Raghad Asfour</h1>
        <h4 className='text-light'>Welcome to my Portfolio.</h4>
        <HeaderSocials/>

        {/* <div className='react-floater-animated'>
          <img id="aws" src={aws} alt="aws"/>
          <img id="cpp" src={cpp} alt="cpp"/>
          <img id="javascript" src={javascript} alt="javascript"/>
        </div>

        <div className='react-floater-animated-opposite'>
          <img id="python" src={python} alt="python"/>
          <img id="django" src={django} alt="django"/>
        </div> */}

        <div className='programmer_image'>
          <img src={Programmer} alt="PROGRAMMER" />
        </div>

        <a href = '#contact' className = 'scroll__down'> ------------> </a>
      </div>
    </header>
  )
}

export default Header