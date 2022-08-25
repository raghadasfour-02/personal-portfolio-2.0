import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Raghad Asfour</h1>
        <h4 className='text-light'>Welcome to my Portfolio.</h4>
      </div>
    </header>
  )
}

export default Header