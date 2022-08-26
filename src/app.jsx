import React from 'react'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'

const app = () => {
  return (
    <>
        <Header />
        <Nav />
        <Experience />
        <About />
        <Contact />
    </>
  )
}

export default app