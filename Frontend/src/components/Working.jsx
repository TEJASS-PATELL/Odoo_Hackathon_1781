import React from 'react';
import { FaSearch, FaUser, FaBookOpen, FaBolt } from 'react-icons/fa';
import './Working.css';

const Working = () => {
  const steps = [
    {
      icon: <FaSearch />,
      title: 'Discover',
      description: 'Find skills or use our AI to generate a custom learning path for you.',
    },
    {
      icon: <FaUser />,
      title: 'Connect',
      description: 'Send a request and schedule a session with your chosen skill partner.',
    },
    {
      icon: <FaBookOpen />,
      title: 'Share & Teach',
      description: 'Exchange your knowledge through one-on-one sessions or group workshops.',
    },
    {
      icon: <FaBolt />,
      title: 'Learn & Grow',
      description: 'Acquire new abilities, get feedback, and expand your network.',
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-container">
        <h2 className="how-title">How It Works</h2>
        <p className="how-subtitle">A simple, AI-enhanced process to get you started.</p>

        <div className="how-grid">
          {steps.map((step, index) => (
            <div className="how-card" key={index}>
              <div className="how-icon">{step.icon}</div>
              <h3 className="how-step-title">{step.title}</h3>
              <p className="how-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Working;