import React from 'react';

const Project = ({ title, image, demoLink, githubLink }) => {
  return (
    <div className="project">
      <img src="src/assets/p1.png" alt={title} className="passwordimg" />
      <h3>{title}</h3>
      
      <div>
        <p>Repository: <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a></p>
        <p>Live Project: <a href={demoLink} target="_blank" rel="noopener noreferrer">{demoLink}</a></p>
      </div>
    </div>
  );
};

export default Project;