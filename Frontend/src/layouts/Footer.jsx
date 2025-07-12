import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaGithub
} from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <h2 className="footer-title">Skill<span className="highlight">Swap</span></h2>
                <p className="footer-subtitle">
                    A smart way to grow your skills by exchanging knowledge with others.
                </p>

                <div className="footer-grid">
                    <div>
                        <h3 className="footer-heading">About</h3>
                        <ul className="footer-links">
                            <li><a href="#">How It Works</a></li>
                            <li><a href="#">Skill Categories</a></li>
                            <li><a href="#">Why Skill Swap?</a></li>
                            <li><a href="#">Meet the Team</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-heading">Features</h3>
                        <ul className="footer-links">
                            <li><a href="#">Post a Skill</a></li>
                            <li><a href="#">Request a Swap</a></li>
                            <li><a href="#">Browse Skills</a></li>
                            <li><a href="#">Rate Swaps</a></li>
                            <li><a href="#">AI Skill Suggestions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-heading">Contact Us</h3>
                        <div className="contact-item">
                            <i className="fas fa-envelope contact-icon"></i>
                            <p className="contact-text">support@skillswap.in</p>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone-alt contact-icon"></i>
                            <p className="contact-text">+91 99999 11111</p>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt contact-icon"></i>
                            <p className="contact-text">Remote, India</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © 2025 SkillSwap — Built with 💡 by Team Hackathon
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-link"><FaFacebookF /></a>
                        <a href="#" className="social-link"><FaInstagram /></a>
                        <a href="#" className="social-link"><FaTwitter /></a>
                        <a href="#" className="social-link"><FaLinkedinIn /></a>
                        <a href="#" className="social-link"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
