import React from 'react'

// Components
import ExperienceBox from './ExperienceBox'

// Styles
import './css/Experience.css'

// Assets
import companyA from '../assets/wcit-logo.png'
import companyB from '../assets/pwc.jpg'
import companyC from '../assets/qxq.jpg'
import companyD from '../assets/tf.jpg'

const experiences = [
    {
        key: 1,
        logo: companyA,
        company: 'Worshipful Company of Information Technologists', 
        position: 'Hackathon Winner',
        description: 'I am a hackathon winner and 2-time WCIT hackathon leader and participator. In the first hackathon, I created a winning technological solution for displaced people using a range of skills, including but not limited to: Coding, UI/UXDesign, Figma, Presenting, etc. In the second hackathon, I developed a way to connect people around the world regardless of their neurodiversity. Each time I was congratulated on my speaking and leadership.'
    },
    {
        key: 2,
        logo: companyB,
        company: 'PwC',
        position: 'New World, New Skills Work Experience',
        description: 'Was chosen to take part in a technology work experience at PwC. As part of this, I learnt how to implement technology to solve business and organizational issues - including the significance of consulting to develop novel solutions. Developed professional and interpersonal skills including, but not limited to, presenting, networking, technology and consulting. As a result, I along with my team presented a pitch to senior members of staff at the company.'
    },
    {
        key: 3,
        logo: companyC,
        company: 'The Coding School',
        position: 'Quantum Computing Student',
        description: 'I was selected to participate in a global quantum computing school for university students worldwide. Here I learned how to code to a real quantum computer, spoke to and heard from leading professors most notably speakers at Microsoft and Stanford University. I participated in lectures by MIT Professor Dr William D. Oliver and Dr. Krysta Svore, a Distinguished engineer and VP of advanced Quantum development at Microsoft'
    },
    {
        key: 4,
        logo: companyD,
        company: 'Teach First',
        position: 'UI/UX Design',
        description: 'I was selected to participate in a UI/UX program. Here I learnt about the fundamentals of UI/UX design, usability and how to implement accessibility into designs. As part of this program I used tools like Figma and WebAIM to develop systems that cater to everyone. To complete this program, I re-designed the Teach First website to better support accessibility.'
    }
]

const Experience = () => {
  return (
    <div>
        <h1 className='e-header'>My <span className='skills-title'>Experience</span></h1>
        {experiences.map((experience) => (
            <ExperienceBox 
                experience={experience}
            />
        ))}
        <h4 className='e-more-text'>...see more on my LinkedIn :)</h4>
    </div>
  )
}

export default Experience