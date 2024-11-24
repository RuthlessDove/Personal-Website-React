import React from 'react'

// Styles
import './css/ExperienceBox.css'

const ExperienceBox = ({ experience }) => {
  return (
    <>
        <div className='e-main-container'>
            <div className={'e-container' + (( experience.key%2 ==0 )? ' e-container-alt' : '')}>
                <div className='e-role-company'>
                    <img src={experience.logo} className='e-company-logo'/>
                    <h3 className='e-position'>{experience.position} <span className='e-company-name'>- {experience.company}</span></h3>
                </div>
                <p className='e-description'>{experience.description + (( experience.key%2 ==0 )? ' 2' : '')}</p>
            </div>
        </div>
    </>
  )
}

export default ExperienceBox