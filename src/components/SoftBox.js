// Dependencies
import React from 'react'

// Styles
import './css/SoftBox.css'

// Assets
import speak from '../assets/public-speaking.png'
import leader from '../assets/leader.png'
import team from '../assets/team.png'
import time from '../assets/time.png'

const SoftBox = () => {

    const items = [
        {
            id: 1,
            title: 'Public Speaking',
            description: 'I am a skilled public speaker. I have developed engaging and successful presentations at conferences, for hackathons, in leadership positions (as head girls) and have continually received positive feedback on my confidence, delivery and clarity',
            image: speak
        },
        {
            id: 2,
            title: 'Leadership',
            description: 'I am a strong leader, have successfully managed and delivered on major projects including winning a hackathon, coordinating leadership teams as head girl and inspiring others. I have received positive feedback from team members, have won hackathons and driven success through a clear vision, strategy and strong communication',
            image: leader
        },
        {
            id: 3,
            title: 'Teamwork',
            description: 'I excel in a team. I have worked and collaborated on group projects on varying initiatives. I have participated actively in working to achieve shared objectives in a cooperative atmosphere',
            image: team
        },
        {
            id: 4,
            title: 'Time Management',
            description: 'I am skilled in time management. I continually juggle work, study and life, balancing multiple projects whilst meeting deadlines and organizing and prioritizing tasks to achieve high quality outcomes with exceptional results',
            image: time
        }
    ]

  return (
    <>
        <div className='soft-skill-grid'>
            {items.map((item) => (
                <div className='grid-item' id={'id' + item.id}>
                    <img 
                        src={item.image}
                        alt={item.title + ' Icon'} 
                    />
                    <h2 className='soft-skill-title'>{item.title}</h2>
                    <p className='s-body'>{item.description}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default SoftBox