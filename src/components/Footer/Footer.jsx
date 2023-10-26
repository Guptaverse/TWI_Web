import React from 'react';
import './Footer.css'; // Create a CSS file for styling
import logo from "./img1.png"
import instagram from "./instagram.png"
import dribble from "./dribble.png"
import linkedin from "./linkedin.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section-1">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="footer-section-2">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Plan</li>
          <li>Book</li>
          <li>Contact</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className="footer-section-3">
        <div className="social-icons">
          <a href="dribble"><img src={dribble} alt="dribble" /></a>
          <a href="instagram"><img src={instagram} alt="instagram" /></a>
          <a href="linkedin"><img src={linkedin} alt="linkedin" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
