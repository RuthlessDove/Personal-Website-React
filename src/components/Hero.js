// Dependencies
import React from 'react'
import { Link } from 'react-scroll'

// Styles 
import './css/Hero.css'

// Assets
import { GrMapLocation } from "react-icons/gr";
import Navbar from './Navbar';

// Functions
import PushDown from './PushDown'

const Hero = () => {
  return (
    <>
     
      <div className='h-container' >
        
        <div className='h-content-overlay'>
          <Navbar />
        
        <div className='h-content'>
          <div className='h-body-text'>
            <img 
              src='https://i.pinimg.com/736x/da/8f/98/da8f9874d3a04662dba514003b531056.jpg'
              className='memoji'
              alt='Profile caricature'
            />
            <h1 className='h-text1'>Hi, I'm <span className='h-name'>Grace</span><br/>A Frontend Developer</h1>
            <div className='h-para-div'>
              <p className='h-text2'>I am an engineer who is always learning and building on my experience to build impactful and robust technology. </p>
              <p className='location-info'><GrMapLocation/> London, UK</p>
            </div>
          </div>

          </div>
        </div>
          <Link to='about' className='h-after-div'>
            <span className='h-after'>
              <svg width="5em" height="5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V18M12 18L7 13M12 18L17 13" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>  
            </span> 
          </Link>
      </div>
    </>
  )
}

export default Hero