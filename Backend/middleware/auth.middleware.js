const jwt = require("jsonwebtoken");
const connectUser = require("../models/users.model.js");

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No Token Provided" });
    }

    const secretKey = "mysecretkey";
    const decoded = jwt.verify(token, secretKey);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    const db = await connectUser();

    const [rows] = await db.execute(
      "SELECT id, fullname, email, isProfileComplete, createdat FROM users WHERE id = ?", 
      [decoded.userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = rows[0];

    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error.message);

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }

    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = protectRoute;
