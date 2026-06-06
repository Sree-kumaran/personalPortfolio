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

    // Create initial portfolio with skills
    const portfolio = new Portfolio({
      name: "Sree Kumaran S",
      email: "sreekumaranshanmugamoffl@outlook.com",
      github: "https://github.com/Sree-kumaran",
      linkedin: "www.linkedin.com/in/sk-shanmugam",
      phone: "8667661096",
      about:
        "Passionate Computer Science undergraduate interested in software development, web technologies, full-stack development, cloud computing, and research.",
      education:
        "Final Year Undergraduate Student\nComputer Science and Engineering",
      skills: [
        {
          category: "Frontend",
          technologies: [
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Vite",
          ],
        },
        {
          category: "Backend",
          technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "REST APIs",
          ],
        },
        {
          category: "Programming Languages",
          technologies: ["Java", "Python", "JavaScript", "C++"],
        },
        {
          category: "Tools & Technologies",
          technologies: [
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "MongoDB Atlas",
          ],
        },
      ],
    });

    await portfolio.save();
    console.log("Portfolio seeded successfully with skills!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding portfolio:", error);
    process.exit(1);
  }
};

seedPortfolio();
