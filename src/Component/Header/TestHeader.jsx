import React, { useState } from 'react';

const TestHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">Logo</span>
        <button className="navbar-toggle" onClick={toggleNav}>
          <span className="navbar-toggle-icon"></span>
        </button>
      </div>
      <ul className={`navbar-nav ${isNavOpen ? 'open' : ''}`}>
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#services">Services</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default TestHeader;