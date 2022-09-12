import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <HeaderSocials/>
        <div className='centered_header'>
        <h5 className='medium_text'>Hello, I'm</h5>
        <h1 className='large_text'>Raghad Asfour</h1>
        <h4 className='text-light' className='medium_text'>Welcome to my Portfolio.</h4>
        </div>
        <a href = '#contact' className = 'scroll__down'> ------------> </a>
      </div>
    </header>
  )
}

export default Header