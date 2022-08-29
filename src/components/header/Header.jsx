import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'
import Programmer from '../../assets/programmer.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Raghad Asfour</h1>
        <h4 className='text-light'>Welcome to my Portfolio.</h4>
        <HeaderSocials/>

        <div className='programmer_image'>
          <img src={Programmer} alt="PROGRAMMER" />
        </div>

        <a href = '#contact' className = 'scroll__down'> ------------> </a>
      </div>
    </header>
  )
}

export default Header