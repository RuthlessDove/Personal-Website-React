import React from "react";

// Styles
import './css/ProjectBox.css'

const ProjectBox = ({ project }) => {
  return (
    <>
      <div className={"project-box" + ((project.key%2==0) ? '-even' : '')}>
        <div className="project-description-box">    
            <h1 className="p-number">{"0" + project.key}</h1>
            <h2 className="p-title">{project.title}</h2>
            <p className="projects-description">{project.description}</p>
            {project.types.map((type) => (
                <span className="tech-type-box">{type}</span>
            ))}
        </div>
        <div className="project-image">
            <img 
                src={project.image} 
                alt={project.title + 'project image'} 
                className="mockup-image"
            />
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
