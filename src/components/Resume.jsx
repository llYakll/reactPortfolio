import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <div>
        <a href="path_to_resume" download>Download Resume</a>
      </div>
      <div>
        <h3>Proficiencies</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          {/* moar, express, jest, vite, etc */}
        </ul>
      </div>
    </section>
  );
};

export default Resume;