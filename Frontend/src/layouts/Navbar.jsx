import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="Lnavbar">
  <div className='Lnavbar-container'>
    <h2 className='logo'>
      Skill<span className='highlight'>Swap</span>
    </h2>
    <ul className="Lnavbar-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#explore">Explore Skills</a></li>
      <li><a href="#mentors">Find Mentors</a></li>
      <li><a href="#exchange">Skill Exchange</a></li>
      <li><a href="#community">Community</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="Lnavbar-auth-buttons">
      <Link to="/login" className="Llogin-btn">Login</Link>
      <Link to="/signup" className="Llogin-btn">Join for free</Link>
    </div>
  </div>
</nav>

  )
}
