import React from 'react';
import { Link } from 'react-router-dom';
import "./navigation.css"

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="list">
        <li className="about"><Link to="/about">About Me</Link></li>
        <li className="portfolio"><Link to="/portfolio">Portfolio</Link></li>
        <li className="contact"><Link to="/contact">Contact</Link></li>
        <li className="resume"><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;