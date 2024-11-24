// React
import React from 'react'

// Styles
import './css/TechBox.css'

const TechBox = ({ skills }) => {

    return (
        <div className='skills-grid-container'>
        <div className='skill-grid'>
            {skills.map(skill => (
                <div 
                className='tech-box' 
                key={skill.id}
                >
                    <img 
                        className='skill-icon'
                        src={skill.icon} 
                        alt={skill.name} 
                    />
                    <h3 className='skill-name'>{skill.name}</h3>
                </div>
            ))}
            
        </div>
        </div>
    )
}

export default TechBox