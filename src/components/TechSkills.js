// Dependencies
import React from 'react'

// Components
import TechBox from './TechBox'

// Styles
import './css/TechSkills.css'

// Assets
import python from '../assets/icons8-python.svg'
import javascript from '../assets/icons8-javascript.svg'
import reactIcon from '../assets/icons8-react.svg'
import figma from '../assets/icons8-figma.svg'
import sql from '../assets/icons8-mysql.svg'
import typescript from '../assets/icons8-typescript.svg'
import nodejs from '../assets/icons8-nodejs.svg'
import php from '../assets/icons8-php.svg'

const TechSkills = () => {

    const skills = [
        {
            id: 1,
            name: 'Python',
            icon: python
        },
        {
            id: 2,
            name: 'JavaScript',
            icon: javascript
        },
        {
            id: 3,
            name: 'React',
            icon: reactIcon
        },
        {
            id: 4,
            name: 'Figma',
            icon: figma
        },
        {
            id: 5,
            name: 'MySQL',
            icon: sql
        },
        {
            id: 6,
            name: 'Node JS',
            icon: nodejs
        },
        {
            id: 7,
            name: 'Typescript',
            icon: typescript
        },
        {
            id: 8,
            name: 'PHP',
            icon: php
        },

    ]

  return (
    <div>
        <h1 className='skills-head'>My <span className='skills-title'>Tech Skills</span></h1>
        <TechBox 
            skills = {skills} 
        />
    </div>
  )
}

export default TechSkills