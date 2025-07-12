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
          Swap Skills, Share Knowledge, <br />
          <span className="highlight">Grow Together</span>
        </h1>
        <p className="hero-subtitle">
          The ultimate platform to learn what you want and teach what you know,
          connecting you with a global community of creators and professionals.
        </p>
        <div className="hero-buttons">
          <a href="#" className="btn-primary">Start Sharing →</a>
          <a href="#skills" className="btn-outline">Explore Skills</a>
        </div>

        <div className="hero-graphic">
          {/* <img className='home-img' src='img.jpg'></img> */}
        </div>
      </div>
      <Working />
      <Skills />
      <Ai/>
      <BenefitsSection />
      <SuccessStories />
      <FAQ />
    </section>
  );
};

export default Home;



