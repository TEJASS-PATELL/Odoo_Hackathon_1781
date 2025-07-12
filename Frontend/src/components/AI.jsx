import React, { useState } from 'react';
import './Ai.css';
import { SparklesIcon } from '@heroicons/react/24/solid';

const Ai = () => {
  const [skill, setSkill] = useState('');
  const [learningPath, setLearningPath] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateLearningPath = async () => {
    if (!skill.trim()) {
      setError('Please enter a skill.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setLearningPath(null);

    const prompt = `Generate a structured learning path for the skill: "${skill}". The path should have a title, a short description, and 3-5 milestones. Each milestone must have a title and a list of key topics to learn.`;

    const apiKey = ''; // Your Gemini API key here
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`API error: ${response.statusText}`);
      const result = await response.json();

      if (result?.candidates?.[0]?.content?.parts?.[0]?.text) {
        const pathData = JSON.parse(result.candidates[0].content.parts[0].text);
        setLearningPath(pathData);
      } else {
        throw new Error('Unexpected API response structure.');
      }
    } catch (err) {
      setError(err.message || 'Failed to generate learning path.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="ai-path-section">
      <div className="container">
        <div className="section-header">
          <h2>
            <SparklesIcon className="icon" /> AI-Powered Learning Paths
          </h2>
          <p>
            Don't know where to start? Tell our AI what you want to learn and get a custom roadmap instantly.
          </p>
        </div>

        <div className="input-card">
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="e.g., Learn JavaScript from scratch"
            onKeyDown={(e) => e.key === 'Enter' && generateLearningPath()}
          />
          <button onClick={generateLearningPath} disabled={isLoading}>
            {isLoading ? 'Generating...' : '✨ Generate Path'}
          </button>
        </div>

        <div className="output-area">
          {isLoading && <div className="loader"></div>}
          {error && <p className="error">{error}</p>}

          {learningPath && (
            <div className="result">
              <h3>{learningPath.pathTitle}</h3>
              <p>{learningPath.description}</p>
              <div className="milestones">
                {learningPath.milestones.map((milestone, index) => (
                  <div className="milestone" key={index}>
                    <h4>
                      Milestone {index + 1}: {milestone.milestoneTitle}
                    </h4>
                    <ul>
                      {milestone.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Ai;
