import React from 'react';
import Project from './props/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Password Generator',
      image: "src\assets\p1.png",
      demoLink: 'https://llyakll.github.io/itsamepasswardo/',
      githubLink: 'https://github.com/llYakll/itsamepasswardo'
    }

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