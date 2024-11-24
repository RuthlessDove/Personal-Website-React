// Dependencies
import React from 'react'
import { Element } from 'react-scroll'

// Styles
import '../css/Home.css'

// Components
import Hero from '../components/Hero'
import About from '../components/About'
import TechSkills from '../components/TechSkills'
import SoftSkills from '../components/SoftSkills'
import MyProjects from '../components/MyProjects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

// Assets 
import spain from '../assets/spain.png'

const Home = () => {
  return (
    <div className='home'>
        <Element name='home'>
          <Hero/>
        </Element>

        <Element name='about'>
          <About />
        </Element>

        <Element name='skills'>
          <TechSkills />
        
          <SoftSkills />
          <div className='h-spanish'>
            <h3>...and I have been learning Spanish</h3>
            <img src={spain} className='spain-img'/>
          </div>
        </Element>

        <Element name='projects'>
          <MyProjects />
        </Element>

        <Element name='experience'>
          <Experience />
        </Element>

        <Element name='contact'>
          <Contact />
        </Element>

        <Footer />
    </div>
  )
}

export default Home