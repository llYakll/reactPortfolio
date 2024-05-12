import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <p>Connect with me:</p>
      <div>
        <a href="https://github.com/llYakll" target="_blank" rel="noopener noreferrer" className='footer-links'>GitHub</a>
        <a href="https://www.linkedin.com/in/zcsullivan12/" target="_blank" rel="noopener noreferrer" className='footer-links'>LinkedIn</a>
        {/* facebook, gmail, x, etc */}
      </div>
    </footer>
  );
};

export default Footer;