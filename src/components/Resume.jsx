import React from 'react';
import resumeFile from '/src/resume/zackSullivan.pdf';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <div>
        <a href={resumeFile} download>Download Resume</a>
      </div>
      <div>
        <h3>Proficiencies</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          {/* Add more stuff like oop, tdd, etc */}
        </ul>
      </div>
    </section>
  );
};

export default Resume;