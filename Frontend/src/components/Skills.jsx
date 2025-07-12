import React from 'react';
import {
  FaLaptopCode,
  FaPaintBrush,
  FaChartLine,
  FaCamera,
  FaMusic,
  FaGlobe,
  FaUtensils,
  FaPenFancy,
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      name: 'Web Development',
      icon: <FaLaptopCode />,
      bg: '#e0f2fe',
      color: '#0369a1',
    },
    {
      name: 'Graphic Design',
      icon: <FaPaintBrush />,
      bg: '#ede9fe',
      color: '#5b21b6',
    },
    {
      name: 'Digital Marketing',
      icon: <FaChartLine />,
      bg: '#dcfce7',
      color: '#15803d',
    },
    {
      name: 'Photography',
      icon: <FaCamera />,
      bg: '#fef3c7',
      color: '#b45309',
    },
    {
      name: 'Music Production',
      icon: <FaMusic />,
      bg: '#fee2e2',
      color: '#991b1b',
    },
    {
      name: 'Language Learning',
      icon: <FaGlobe />,
      bg: '#dbeafe',
      color: '#1e40af',
    },
    {
      name: 'Cooking & Baking',
      icon: <FaUtensils />,
      bg: '#ffedd5',
      color: '#c2410c',
    },
    {
      name: 'Creative Writing',
      icon: <FaPenFancy />,
      bg: '#f3f4f6',
      color: '#374151',
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Explore Popular Skills</h2>
        <p className="skills-subtitle">
          Dive into categories that are trending on SkillSwap right now.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              style={{ backgroundColor: skill.bg, color: skill.color }}
              onClick={() => alert(`You selected ${skill.name}`)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  alert(`You selected ${skill.name}`);
                }
              }}
              role="button"
              aria-label={`Explore ${skill.name} skill category`}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h4 className="skill-name">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
