// Dependencies
import React from 'react'
import { Link } from 'react-scroll'

// Styles 
import './css/Hero.css'

// Assets
import logo from '../assets/logo_no_bg.png'


const Navbar = () => {
  return (
    <>
        <div className='h-nav-container'>
            <nav className='h-navbar'>
              <a 
                className='h-nav-item'
                href='/'
              >
                <img 
                  src={logo}
                  height={'40em'}
                  alt='Logo'
                />
                
              </a>

              <Link to='home' className='h-nav-item'>Home</Link>
              <Link to='about' smooth duration={80} className='h-nav-item'>About</Link>
              <Link to='skills'  className='h-nav-item'>Skills</Link>
              <Link to='projects'  className='h-nav-item'>Projects</Link>
              <Link to='experience'  className='h-nav-item'>Experience</Link>
              <Link to='contact'  className='h-nav-item'>Contact</Link>
            </nav>
          </div>
    </>
  )
}

export default Navbar