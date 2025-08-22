import React from 'react';
import './Home.css'
import Working from '../components/Working';
import Skills from '../components/Skills';
import BenefitsSection from '../components/BenifitsSection';
import SuccessStories from '../components/SuccessStories';
import FAQ from '../components/FAQ';
import Ai from '../components/AI';

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Swap Skills - Share Knowledge<br />
          <span className="highlight">Grow Together</span>
        </h1>
        <p className="hero-subtitle">
          Swap skills, not money! Our platform connects learners and teachers from around the world — so you can teach what you know and learn what you need, all through skill exchange.
        </p>
        <div className="hero-buttons">
          <a href="#" className="btn-primary">Start Sharing </a>
          <a href="#skills" className="btn-outline">Explore Skills</a>
        </div>

        <div className="chart-container">
          <div className="svg-box">
            <svg
              viewBox="0 35 200 70"
              className="svg-chart"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M 60 45 C 90 25, 120 25, 150 45"
                stroke="black"
                strokeDasharray="6"
                strokeDashoffset="60"
                fill="none"
                strokeWidth="1.5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="60"
                  to="0"
                  dur="2s"
                  repeatCount="indefinite"
                  calcMode="linear"
                />
              </path>

              <path
                d="M 65 55 C 95 75, 125 75, 155 55"
                stroke="#7c3aed"
                strokeDasharray="6"
                strokeDashoffset="0"
                fill="none"
                strokeWidth="1.5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="60"
                  dur="2s"
                  repeatCount="indefinite"
                  calcMode="linear"
                />
              </path>


              <g transform="translate(45 40)">
                <circle cx="10" cy="10" r="10" fill="white" stroke="black" strokeWidth="1" />
                <rect x="5" y="20" width="10" height="20" rx="5" fill="white" stroke="black" strokeWidth="1" />
                <circle cx="10" cy="10" r="3" fill="black" stroke="black" strokeWidth="0.5" />
              </g>
              <g transform="translate(150 40)">
                <circle cx="10" cy="10" r="10" fill="white" stroke="#7c3aed" strokeWidth="1" />
                <rect x="5" y="20" width="10" height="20" rx="5" fill="white" stroke="#7c3aed" strokeWidth="1" />
                <circle cx="10" cy="10" r="3" fill="#7c3aed" stroke="#7c3aed" strokeWidth="0.5" />
              </g>

            </svg>
          </div>
        </div>


      </div>
      <Working />
      <Skills />
      <Ai />
      <BenefitsSection />
      <SuccessStories />
      <FAQ />
    </section>
  );
};

export default Home;



