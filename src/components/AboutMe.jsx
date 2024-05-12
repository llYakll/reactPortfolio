import React, { useEffect, useState } from 'react';
import './about.css'; 

const AboutMe = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 2000); 

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section>
      <h2>About Me</h2>
      <div className="about-container">
        <img src="src/assets/zak.jpg" alt="Zachary Sullivan" height="300px"/>
        <div className={`about-text ${showContent ? 'fade-in' : ''}`}>
          <p className="greeting">Hello, I'm Zachary Sullivan.</p>
          <p className="statement">I'm a passionate web developer with expertise in React and JavaScript. I will add a slidehow here with a history of myself</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;