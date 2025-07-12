import React, { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import "./Dashboard.css";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axiosInstance.get("/user/all");
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const search = searchTerm.toLowerCase();
    return (
      user.skillshave?.toLowerCase().includes(search) ||
      user.skillswant?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="dashboard-container">
      <h1>Skill Swap Members</h1>

      <input
        type="text"
        placeholder="Search by skill..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="user-grid">
        {filteredUsers.length === 0 ? (
          <p style={{ marginTop: "2rem", textAlign: "center" }}>No users found 🧐</p>
        ) : (
          filteredUsers.map((user) => (
            <div className="user-card" key={user._id || user.id}>
              <h2>{user.fullname || "Unnamed User"}</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Location:</strong> {user.location || "N/A"}</p>
              <p><strong>Bio:</strong> {user.bio || "N/A"}</p>
              <p><strong>Skills Have:</strong> {user.skillshave || "N/A"}</p>
              <p><strong>Skills Want:</strong> {user.skillswant || "N/A"}</p>
              <p><strong>Availability:</strong> {user.availability || "N/A"}</p>
              <p><strong>Profile:</strong> {user.isProfileComplete ? "✅ Complete" : "❌ Incomplete"}</p>
              <p><strong>Public:</strong> {user.isPublic ? "🌍 Yes" : "🔒 No"}</p>
              <p><strong>Joined:</strong> {
                user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "Unknown"
              }</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
