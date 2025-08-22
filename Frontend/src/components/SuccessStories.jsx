import React from 'react';
import './SuccessStories.css';
import { FaStar } from 'react-icons/fa'; 

const testimonials = [
  {
    quote:
      "SkillSwap changed how I learn. I followed an AI roadmap for Python and swapped skills with a software engineer. Brilliant idea!",
    name: "Sarah Johnson",
    title: "Musician & Aspiring Coder",
    avatar: "https://placehold.co/100x100/a78bfa/ffffff?text=SJ",
  },
  {
    quote:
      "As a designer, I taught Photoshop here. Great for building my teaching and portfolio skills. Highly recommend!",
    name: "Michael Chen",
    title: "Freelance Graphic Designer",
    avatar: "https://placehold.co/100x100/7dd3fc/ffffff?text=MC",
  },
  {
    quote:
      "I'm a student with a budget. SkillSwap helped me learn Excel for free. The community is awesome!",
    name: "Isabelle Rodriguez",
    title: "University Student",
    avatar: "https://placehold.co/100x100/fca5a5/ffffff?text=IR",
  },
];

export default function SuccessStories() {
  return (
    <section className="testimonial-section">
      <h2>Success Stories from Our Community</h2>
      <p className="subtitle">See how SkillSwap is making a difference.</p>

      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="stars" aria-label="5 star rating">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} color="#fbbf24" size={18} />
              ))}
            </div>
            <p className="quote">"{t.quote}"</p>
            <div className="user-info">
              <img src={t.avatar} alt={t.name} />
              <div>
                <strong>{t.name}</strong>
                <p className="title">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
