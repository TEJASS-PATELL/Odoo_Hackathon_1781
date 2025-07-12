const express = require("express");
const { login, logout, signup, updateDetails, checkAuth } = require("../controllers/auth.controller.js");
const protectRoute = require("../middleware/auth.middleware.js");  
const connectUser = require("../models/users.model");


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", protectRoute, logout);
router.get("/user/all", protectRoute, async (req, res) => {
  try {
    const db = connectUser();

    const [users] = await db.execute(`
      SELECT id, fullname, email, location, bio, skillshave, skillswant, availability, isProfileComplete, isPublic, createdat
      FROM users
      WHERE isPublic = true
    `);

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/update-details", protectRoute, updateDetails);

router.get("/check", protectRoute, checkAuth);  

module.exports = router;

