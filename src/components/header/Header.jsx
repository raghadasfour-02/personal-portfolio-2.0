import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'
import Anime from 'react-anime';

const Header = () => {
  return (
    <header>
      <HeaderSocials/>
      <div className="container header__container">
        <div className='centered_header'>
        <Anime opacity={[0, 1]} translateY={'-1em'} easing={'easeInBack'} delay={100}>
          <h5 className='medium_text'>Hello!</h5>
        </Anime>
        <Anime opacity={[0, 1]} translateY={'-1em'} easing={'easeInBack'} delay={400}>
        <h1 className='large_text'>Raghad Asfour</h1>
        </Anime>
        <Anime opacity={[0, 1]} translateY={'-1em'} easing={'easeInBack'} delay={1000}>
        <h4 className='text-light' className='medium_text'>Welcome to my Portfolio.</h4>
        </Anime>
        </div>
        <a href = '#contact' className = 'scroll__down'> ------------> </a>
      </div>
    </header>
  )
}

export default Header