import React from 'react'

// Styles
import './css/About.css'

// Assets
import image2 from '../assets/image1.jpg'

const About = () => {
  return (
    <>
    <div className='a-container'>
      <div className='a-content'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-body'>Hi there! I'm Grace, a passionate student working towards being a software engineer. With a background in Computer Science and years of hands-on experience coding. I excel with tackling with complex problems, creating exemplary user experiences and developing innovative solutions. Over the years, I have honed my programming skills including HTML, CSS, JavaScript, React and AI ethics. Collaboration, Innovation and Impact are at the heart of what I do. I enjoy working in dynamic teams as well as taking on leadership roles to ensure that diverse ideas flourish. <br></br>Outside of work, I am keen on taking on novel and interesting opportunities. I enjoy football, reading and dance. I like to study new things. Being knowledgeable about tech is an ongoing process, and I’m always proactive about seeking new opportunities to develop and grow in my role.<br/><br/><b>Feel free to reach out about any projects, or just to connect!</b></p>
      </div>
      <img 
        src={image2}
        className='a-img'  
      />
    </div>
    </>
  )
}

export default About