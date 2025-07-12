import React from 'react';
import './BenefitsSection.css';
import {
  FaHandsHelping,
  FaTrophy,
  FaFolderOpen,
  FaMoneyBillWave,
} from 'react-icons/fa';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Completely Free Learning',
      description:
        'Access a world of knowledge without any cost. Your skill is your currency.',
      icon: <FaMoneyBillWave />,
    },
    {
      title: 'Meaningful Connections',
      description:
        'Move beyond networking. Build friendships with people who share your passions.',
      icon: <FaHandsHelping />,
    },
    {
      title: 'Grow Your Portfolio',
      description:
        "Showcase your teaching ability and projects you've collaborated on.",
      icon: <FaFolderOpen />,
    },
    {
      title: 'Earn Recognition',
      description:
        'Get endorsed for your skills and build a reputation as an expert in your field.',
      icon: <FaTrophy />,
    },
  ];

  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-container">
        <h2 className="benefits-title">Why You'll Love SkillSwap</h2>
        <p className="benefits-subtitle">
          More than just a platform, it's a community for growth.
        </p>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <div>
                <h3 className="benefit-heading">{benefit.title}</h3>
                <p className="benefit-text">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
