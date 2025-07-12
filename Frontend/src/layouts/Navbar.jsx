import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Skill<span className="highlight">Swap</span>
        </a>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#how-it-works">How It Works</a>
          <a href="#skills">Skills</a>
          <a href="#ai-path">✨ AI Paths</a>
          <a href="#benefits">Benefits</a>
          <a href="#testimonials">Testimonials</a>
         <Link to="/login" className="login-btn">Log In</Link>
          <Link to="/signup" className="join-btn">Join for Free</Link>
        </nav>
      </div>
    </header>
  );
}
