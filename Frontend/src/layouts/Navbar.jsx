import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Skill<span className="highlight">Swap</span>
        </a>

        <nav className="navbar-links">
          <a href="#how-it-works">How It Works</a>
          <a href="#skills">Skills</a>
          <a href="#ai-path">✨ AI Paths</a>
          <a href="#benefits">Benefits</a>
          <a href="#testimonials">Testimonials</a>
          <a href="/login" className="login-btn">Log In</a>
          <a href="/signup" className="join-btn">Join for Free</a>
        </nav>
      </div>
    </header>
  );
}
