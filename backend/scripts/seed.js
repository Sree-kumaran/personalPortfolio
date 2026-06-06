const mongoose = require("mongoose");
require("dotenv").config();
const Portfolio = require("../models/Portfolio");

const seedPortfolio = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio",
    );

    // Clear existing data
    await Portfolio.deleteMany({});

    // Create initial portfolio
    const portfolio = new Portfolio({
      name: "Sree Kumaran S",
      email: "",
      github: "",
      linkedin: "",
      phone: "",
      about:
        "Passionate Computer Science undergraduate interested in software development, web technologies, full-stack development, cloud computing, and research.",
      education:
        "Final Year Undergraduate Student\nComputer Science and Engineering",
    });

    await portfolio.save();
    console.log("Portfolio seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding portfolio:", error);
    process.exit(1);
  }
};

seedPortfolio();
