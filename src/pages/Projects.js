// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import '../css/Projects.css'

// Components
import ProjectBox from '../components/ProjectBox'

// Assets
import mockup1 from '../assets/mockup1.png'
import mockup2 from '../assets/mockup2.png'
import { IoArrowBackCircle } from "react-icons/io5";


const projects = [
  {
      key: 1,
      title: 'Bubbles',
      description: 'A revolutionary solution helping those around the world connect in the comfort of their own homes or where ever they choose with technology. Bubbles harnesses technology to create connections as well as in person events particularly for neurodiverse people. Bubbles is different from other sites in that it harnesses the values of individuality, accessibility and functionality to create the best possible platform.',
      types: ['Figma', 'Mobile App', 'Presentation software', 'Public Speaking'],
      image: mockup1
  },
  {
      key: 2,
      title: 'Communify',
      description: 'A platform that is working to change the lives of displaced people all around the world. Communify utilizes a wearable, app and website to tackle crises faced by people that are displaced regardless of the circumstances. Communify helps with the location of ammenities, acquisition of knowledge, and safety with regards to physical and mental health',
      types: ['Web Development', 'Mobile App', 'Figma', 'Presentation', 'Public Speaking'],
      image: mockup2
  }
]


const Projects = () => {
  return (
    <div className='p-bgd'>

    <div className='p-main'>      

    <div className='projects-component-div'>
    <Link to={'/'}><IoArrowBackCircle size={50} color='#fff'/></Link>
        <h1 className='projects-title'>My <span className='projects-title-bold'>Projects</span></h1>
        {projects.map(project =>( 
            <ProjectBox 
                project={project}
            />
        ))}
    </div>
    </div>
    </div>
  )
}

export default Projects