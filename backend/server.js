const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Portfolio = require("./models/Portfolio");
const portfolioRoutes = require("./routes/portfolioRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

const seedDefaultPortfolio = async () => {
  const portfolioCount = await Portfolio.countDocuments();

  if (portfolioCount === 0) {
    await Portfolio.create({
      name: "Sree Kumaran S",
      email: "",
      github: "",
      linkedin: "",
      phone: "",
      about:
        "Passionate Computer Science undergraduate interested in software development, web technologies, full-stack development, cloud computing, and research.",
      education:
        "Final Year Undergraduate Student, Computer Science and Engineering",
    });

    console.log("✅ Default portfolio document created.");
  }
};

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend server is up and running!",
  });
});

app.use("/api/portfolio", portfolioRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const startServer = async () => {
  await connectDB();
  await seedDefaultPortfolio();

  app.listen(PORT, () => {
    console.log(`🚀 Server successfully launched on http://localhost:${PORT}`);
  });
};

startServer();
