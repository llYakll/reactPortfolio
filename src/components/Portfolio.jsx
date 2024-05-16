import React from 'react';
import Project from './props/Project';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Password Generator',
      image: '/p1.png',
      demoLink: 'https://llyakll.github.io/itsamepasswardo/',
      githubLink: 'https://github.com/llYakll/itsamepasswardo'
    },
    {
      title: 'Work Day Scheduler',
      image: '/wds.png',
      demoLink: 'https://llyakll.github.io/planyourday/',
      githubLink: 'https://github.com/llYakll/planyourday'
    }
  ];

  return (
    <section className="port-container">
      <h2>Portfolio</h2>
      <div className="password-generator">
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