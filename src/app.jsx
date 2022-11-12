import React from 'react'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import Experience from './components/experience/Experience'
import Extracurriculars from './components/extracurriculars/Extracurriculars'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const app = () => {
  return (
    <>
        <Header />
        <Nav />
        <Experience />
        <Extracurriculars />
        <About />
        <Contact />
        <Footer />
    </>
  )
}

export default app