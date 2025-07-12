
(

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../Store/useAuthStore";
import { FaEye, FaEyeSlash, FaLock, FaLockOpen } from 'react-icons/fa';
import { Eye, EyeOff, Loader2, Lock, Mail, Unlock, User } from "lucide-react";
import toast from "react-hot-toast";
import "../styles/SignUpPage.css";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    const { fullname, email, username, password, confirmPassword } = formData;
    if (!fullname.trim()) return toast.error("Full name is required");
    if (!email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(email)) return toast.error("Invalid email format");
    if (!username.trim()) return toast.error("Username is required");
    if (!password) return toast.error("Password is required");
    if (password.length < 6) return toast.error("Password must be at least 6 characters");
    if (password !== confirmPassword) return toast.error("Passwords do not match");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { fullname, email, username, password } = formData;
      signup({ fullname, email, username, password });
    }
  };

  return (
    <div className="loginnn">
    <div className="signup-container">
      {/* Main Form */}
      <main>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create an Account</h2>

          {/* Full Name */}
          <div className="input-group">
            <label>Full Name</label>
            <div className="input-wrapper">
              <User className="input-icon" />
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <div className="input-wrapper">
              <Mail className="input-icon" />
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Username */}
          <div className="input-group">
            <label>Username</label>
            <div className="input-wrapper">
              <User className="input-icon" />
              <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaLockOpen /> : <FaLock />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms and Conditions</a>
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className={`submit-btn ${isSigningUp ? "disabled" : ""}`} disabled={isSigningUp}>
            {isSigningUp ? (
              <>
                <Loader2 className="loader" />
                Creating Account...
              </>
            ) : (
              "Sign Up"
            )}
          </button>

          {/* Redirect to Login */}
          <p className="login-redirect">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </form>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Chat App. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default SignUpPage;

=======
import React from 'react';
import './Home.css';

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
          <p className="demo-text"></p>
        </div>
      </div>
    </section>
  );
};

export default Home;


