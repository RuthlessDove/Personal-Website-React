// Dependencies
import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations/index'

// Styles
import'./css/Preloader.css'

// Assets
import logo from '../assets/logo.png'

const Preloader = () => {

  useEffect(() =>{
      preLoaderAnim()
  }, []);

  return (
    <div className='preloader'>
      <div className='texts-container'>
          <span>Coder,</span>
          <span>Speaker,</span>
          <span>Innovator.</span>
      </div>
    </div>
  )
}

export default Preloader
