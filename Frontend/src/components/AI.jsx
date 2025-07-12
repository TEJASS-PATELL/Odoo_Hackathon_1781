import React, { useState } from 'react';
import './Ai.css';
import { SparklesIcon } from '@heroicons/react/24/solid';

const Ai = () => {
  const [skill, setSkill] = useState('');
  const [learningPath, setLearningPath] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = ''; // 👈 Put your Gemini API key here

  const generateLearningPath = async () => {
    if (!skill.trim()) {
      setError('❗ Please enter a skill.');
      return;
    }

    if (!apiKey.trim()) {
      setError('⚠️ Please enter your API key to generate a learning path.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setLearningPath(null);

    const prompt = `Generate a structured learning path for the skill: "${skill}". The path should have a title, a short description, and 3-5 milestones. Each milestone must have a title and a list of key topics to learn. Return JSON format like:
{
  "pathTitle": "Title here",
  "description": "Short description here",
  "milestones": [
    {
      "milestoneTitle": "Milestone 1 title",
      "topics": ["Topic 1", "Topic 2"]
    }
  ]
}`;

    const payload = {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const result = await response.json();

      const textOutput = result?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (textOutput) {
        const pathData = JSON.parse(textOutput);
        setLearningPath(pathData);
      } else {
        throw new Error('Unexpected API response format.');
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
            Don&apos;t know where to start? Tell our AI what you want to learn and get a custom roadmap instantly.
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
