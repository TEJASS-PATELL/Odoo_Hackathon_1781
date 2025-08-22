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
      desc: 'Build modern websites, apps, and online platforms.',
    },
    {
      name: 'Graphic Design',
      icon: <FaPaintBrush />,
      bg: '#ede9fe',
      color: '#5b21b6',
      desc: 'Create stunning visuals, logos, and branding assets.',
    },
    {
      name: 'Digital Marketing',
      icon: <FaChartLine />,
      bg: '#dcfce7',
      color: '#15803d',
      desc: 'Grow your brand online with SEO and social media.',
    },
    {
      name: 'Photography',
      icon: <FaCamera />,
      bg: '#fef3c7',
      color: '#b45309',
      desc: 'Capture moments with professional photography skills.',
    },
    {
      name: 'Music Production',
      icon: <FaMusic />,
      bg: '#fee2e2',
      color: '#991b1b',
      desc: 'Create beats, mix tracks, and explore audio tools.',
    },
    {
      name: 'Language Learning',
      icon: <FaGlobe />,
      bg: '#dbeafe',
      color: '#1e40af',
      desc: 'Master new languages for travel, work, or fun.',
    },
    {
      name: 'Cooking & Baking',
      icon: <FaUtensils />,
      bg: '#ffedd5',
      color: '#c2410c',
      desc: 'Explore recipes, kitchen tips, and tasty techniques.',
    },
    {
      name: 'Creative Writing',
      icon: <FaPenFancy />,
      bg: '#f3f4f6',
      color: '#374151',
      desc: 'Express ideas through storytelling, poetry, and more.',
    },
  ];

  return (
    <section className="skills-section">
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
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
