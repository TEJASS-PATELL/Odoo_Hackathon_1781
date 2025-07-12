const ConnectDB = require("../lib/db");
const { generateToken } = require("../lib/utils");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const db = await ConnectDB();

    const [existingUser] = await db.execute(
      `SELECT * FROM users WHERE email = ?`,
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [result] = await db.execute(
      `INSERT INTO users (fullname, email, password, isProfileComplete) VALUES (?, ?, ?, ?)`,
      [fullname, email, hashedPassword, false]
    );

    const newUserId = result.insertId;

    generateToken(newUserId, res);

    res.status(201).json({
      id: newUserId,
      fullname,
      email,
      isProfileComplete: false
    });

  } catch (error) {
    console.error("Error in signup controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = await ConnectDB();

    const [user] = await db.execute(
      `SELECT * FROM users WHERE email = ?`,
      [email]
    );

    if (user.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const validUser = user[0];

    const isPasswordCorrect = await bcrypt.compare(password, validUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generateToken(validUser.id, res);

    res.status(200).json({
      id: validUser.id,
      fullname: validUser.fullname,
      email: validUser.email,
      location: validUser.location,
      isProfileComplete: !!validUser.isProfileComplete
    });

  } catch (error) {
    console.error("Error in login controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateDetails = async (req, res) => {
  try {
    const {
      fullname,
      location,
      bio,
      skillshave,
      skillswant,
      availability,
      isPublic
    } = req.body;

    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized: User ID missing" });
    }

    const db = await ConnectDB();
    const fieldsToUpdate = [];
    const values = [];

    if (fullname) {
      fieldsToUpdate.push("fullname = ?");
      values.push(fullname);
    }
    if (location) {
      fieldsToUpdate.push("location = ?");
      values.push(location);
    }
    if (bio) {
      fieldsToUpdate.push("bio = ?");
      values.push(bio);
    }
    if (skillshave) {
      fieldsToUpdate.push("skillshave = ?");
      values.push(skillshave);
    }
    if (skillswant) {
      fieldsToUpdate.push("skillswant = ?");
      values.push(skillswant);
    }
    if (availability) {
      fieldsToUpdate.push("availability = ?");
      values.push(JSON.stringify(availability));
    }
    if (typeof isPublic === "boolean") {
      fieldsToUpdate.push("isPublic = ?");
      values.push(isPublic);
    }

    // ✅ When profile is updated => mark it complete
    fieldsToUpdate.push("isProfileComplete = ?");
    values.push(true);

    if (fieldsToUpdate.length === 0) {
      return res.status(400).json({ message: "No fields to update" });
    }

    values.push(userId);
    const updateQuery = `UPDATE users SET ${fieldsToUpdate.join(", ")} WHERE id = ?`;

    await db.execute(updateQuery, values);

    const [updatedUser] = await db.execute(
      `SELECT id, fullname, email, location, profilepic, bio, skillshave, skillswant, availability, isPublic, isProfileComplete, createdat FROM users WHERE id = ?`,
      [userId]
    );

    if (updatedUser[0]?.availability) {
      updatedUser[0].availability = JSON.parse(updatedUser[0].availability);
    }

    res.status(200).json(updatedUser[0]);

  } catch (error) {
    console.error("Error in updateDetails:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const checkAuth = async (req, res) => {
  try {
    const userId = req.user.id;

    const db = await ConnectDB();
    const [user] = await db.execute(
      `SELECT id, fullname, email, location, isProfileComplete, createdat FROM users WHERE id = ?`,
      [userId]
    );

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user[0]);
  } catch (error) {
    console.error("Error in checkAuth controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  signup,
  login,
  logout,
  updateDetails,
  checkAuth,
};
