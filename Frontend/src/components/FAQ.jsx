import React, { useState } from 'react';
import './FAQ.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: "What is SkillSwap?",
    answer: "SkillSwap is a platform where people exchange skills. You can learn something new from others while teaching your own skills in return."
  },
  {
    question: "How do I start swapping skills?",
    answer: "Just sign up, choose your learning and teaching interests, and connect with others who match your goals."
  },
  {
    question: "Is SkillSwap free to use?",
    answer: "Yes! SkillSwap is completely free. No hidden costs or subscriptions. Just share your skills and learn from others."
  },
  {
    question: "Do I need to be a professional to teach?",
    answer: "Not at all! Anyone with knowledge or experience can teach. Even beginners can share what they know."
  },
  {
    question: "How do I connect with other users?",
    answer: "You can browse members, view their skill profiles, and send them a request to start a skill swap chat or video call."
  },
  {
    question: "What if I don’t find a match?",
    answer: "New users join every day. You can also try improving your profile or exploring different skill categories to increase your chances."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // ✅ corrected variable name

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // ✅ toggles open/close
  };

  return (
    <>
       <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-wrapper">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              key={index}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-heading">Ready to Learn and Teach?</h2>
          <p className="cta-subtext">
            Join thousands of creators, professionals, and lifelong learners on SkillSwap today.
            Your next skill is just a swap away.
          </p>
          <div className="cta-button-wrapper">
            <a href="#" className="cta-button">
              Join SkillSwap Today!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
