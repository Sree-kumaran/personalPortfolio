const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Import Routes (with error handling)
let portfolioRoutes, skillRoutes;

try {
  portfolioRoutes = require("./routes/portfolioRoutes");
  console.log("Portfolio routes loaded");
} catch (err) {
  console.error("Error loading portfolio routes:", err.message);
}

try {
  skillRoutes = require("./routes/skillRoutes");
  console.log("Skill routes loaded");
} catch (err) {
  console.error("Error loading skill routes:", err.message);
}

// Register Routes (only if loaded successfully)
if (portfolioRoutes) {
  app.use("/api/portfolio", portfolioRoutes);
}

if (skillRoutes) {
  app.use("/api/skills", skillRoutes);
}

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio API is running" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Server error",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
