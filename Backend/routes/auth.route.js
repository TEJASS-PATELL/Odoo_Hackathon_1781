const express = require("express");
const { login, logout, signup, updateDetails, checkAuth } = require("../controllers/auth.controller.js");
const protectRoute = require("../middleware/auth.middleware.js");  

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", protectRoute, logout);

router.put("/update-details", protectRoute, updateDetails);

router.get("/check", protectRoute, checkAuth);  

module.exports = router;

