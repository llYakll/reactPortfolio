import React from 'react';

const Project = ({ title, image, demoLink, githubLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div>
        <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Project;