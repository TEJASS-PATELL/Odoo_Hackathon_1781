import { useState } from "react";
import { Link } from "react-router-dom";
// import { useAuthStore } from "../Store/useAuthStore";
import { FaEye, FaEyeSlash, FaLock, FaLockOpen } from 'react-icons/fa';
import { Eye, EyeOff, Loader2, Lock, Mail, Unlock, User } from "lucide-react";
import { toast } from 'react-toastify';
import "./Signup.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, isSigningUp } = useState(true);

  const validateForm = () => {
    const { fullname, email, location, password, confirmPassword } = formData;
    if (!fullname.trim()) return toast.error("Full name is required");
    if (!email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(email)) return toast.error("Invalid email format");
    if (!location.trim()) return toast.error("Username is required");
    if (!password) return toast.error("Password is required");
    if (password.length < 6) return toast.error("Password must be at least 6 characters");
    if (password !== confirmPassword) return toast.error("Passwords do not match");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { fullname, email, location, password } = formData;
      signup({ fullname, email, location, password });
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
            <label>Location</label>
            <div className="input-wrapper">
              <User className="input-icon" />
              <input
                type="text"
                placeholder="Username"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
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

          <p className="login-redirect">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </form>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Skill Swap. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default Signup;
