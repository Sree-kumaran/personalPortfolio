// Import required dependencies
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Loads variables from the .env file

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON payloads
app.use(express.json());

/**
 * MongoDB Database Connection Function
 */
const connectDB = async () => {
  try {
    // Attempt connection using the URI stored in environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    process.exit(1); // Force terminate the process if connection fails
  }
};

// Invoke the database connection function
connectDB();

/**
 * Sample API Routes
 */
// Basic health check route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend server is up and running!" });
});

// Fallback for non-existent routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

/**
 * Start the Express Web Server
 */
app.listen(PORT, () => {
  console.log(
    `🚀 Server successfully launched on port http://localhost:${PORT}`,
  );
});
