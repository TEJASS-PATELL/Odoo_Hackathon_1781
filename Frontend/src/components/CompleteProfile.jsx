import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import './complete-profile.css';

const CompleteProfile = () => {
  const [formData, setFormData] = useState({
    location: "",
    bio: "",
    skillshave: "",
    skillswant: "",
    availability: "",
    isPublic: true,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.put("/auth/update-details", formData);
      toast.success("Profile updated successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to update profile");
    }
  };

  return (
    <div className="complete-profile-container">
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="bio"
          placeholder="Your bio"
          value={formData.bio}
          onChange={handleChange}
        />
        <input
          name="skillshave"
          placeholder="Skills you have (comma separated)"
          value={formData.skillshave}
          onChange={handleChange}
        />
        <input
          name="skillswant"
          placeholder="Skills you want to learn"
          value={formData.skillswant}
          onChange={handleChange}
        />
        <input
          name="availability"
          placeholder="Available days/times"
          value={formData.availability}
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="isPublic"
            checked={formData.isPublic}
            onChange={handleChange}
          />
          Show my profile to others
        </label>
        <button type="submit">Save & Continue</button>
      </form>
    </div>
  );
};

export default CompleteProfile;
