import React from 'react';
import './Nav.css'; 
import logo from "./company-logo.png"
import Avatar from "./Avatar.png"

const Nav = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/plan">Plan</a>
        <a href="/book">Book</a>
        <div className="profile-icon">
            <img src={Avatar} alt='Profile icon'/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
