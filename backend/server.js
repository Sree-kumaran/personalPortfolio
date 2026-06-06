const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const portfolioRoutes = require("./routes/portfolioRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/portfolio", portfolioRoutes);

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
