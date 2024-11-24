// Dependencies
import React from 'react';
import { useEffect, useState } from 'react';

// Assets
import { FaArrowCircleUp } from "react-icons/fa";

// Styles
import './css/BackToTopButton.css'

function BackToTopButton(){
  
  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) { 
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({ 
      top: 0, 
      behavior:'smooth'
    });
  }
  
  return (
    <div>
      {BackToTopButton &&
        <button
          className='top-button'
          onClick={scrollUp}

        >
          <FaArrowCircleUp />
        </button>
      }
    </div> 
  )
}

export default BackToTopButton