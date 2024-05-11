import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'path_to_image',
      demoLink: 'demo_link',
      githubLink: 'github_link'
    },
    {
      title: 'Project 2',
      image: 'path_to_image',
      demoLink: 'demo_link',
      githubLink: 'github_link'
    },
   
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;