const mongoose = require("mongoose");
require("dotenv").config();
const Portfolio = require("../models/Portfolio");

const seedProjects = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio",
    );

    const portfolio = await Portfolio.findOne();

    if (!portfolio) {
      console.error("Portfolio not found. Run main seed first.");
      process.exit(1);
    }

    // Clear existing projects
    portfolio.projects = [];

    // Sample projects
    const projects = [
      {
        title: "Portfolio Website",
        description:
          "Full-stack portfolio website built with React, Node.js, Express, and MongoDB. Showcases projects, skills, and contact information with a modern, responsive design.",
        technologies: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
          "Vite",
        ],
        githubLink: "https://github.com/Sree-kumaran/personalPortfolio",
        liveLink: "https://sree-kumaran-portfolio.vercel.app",
        category: "Web Development",
        featured: true,
        image: "",
      },
      {
        title: "E-Commerce Platform",
        description:
          "A complete e-commerce application with product catalog, shopping cart, user authentication, and payment integration using Stripe API.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
        githubLink: "https://github.com/Sree-kumaran/ecommerce",
        liveLink: "https://ecommerce-platform.com",
        category: "Web Development",
        featured: true,
        image: "",
      },
      {
        title: "Machine Learning Model - Iris Classification",
        description:
          "A machine learning model that classifies iris flowers based on features using scikit-learn. Includes data preprocessing, model training, and evaluation.",
        technologies: [
          "Python",
          "Scikit-learn",
          "Pandas",
          "NumPy",
          "Matplotlib",
        ],
        githubLink: "https://github.com/Sree-kumaran/iris-classification",
        liveLink: "",
        category: "Machine Learning",
        featured: false,
        image: "",
      },
      {
        title: "Weather Application",
        description:
          "A real-time weather application that fetches data from OpenWeather API and displays current weather, forecasts, and weather alerts with a beautiful UI.",
        technologies: [
          "React",
          "JavaScript",
          "Tailwind CSS",
          "OpenWeather API",
        ],
        githubLink: "https://github.com/Sree-kumaran/weather-app",
        liveLink: "https://sree-weather-app.vercel.app",
        category: "Web Development",
        featured: false,
        image: "",
      },
      {
        title: "Task Management System",
        description:
          "A task management application with features like creating tasks, setting priorities, due dates, and tracking progress. Built with React and Firebase.",
        technologies: ["React", "Firebase", "Firestore", "Tailwind CSS"],
        githubLink: "https://github.com/Sree-kumaran/task-manager",
        liveLink: "https://task-manager-sree.vercel.app",
        category: "Web Development",
        featured: true,
        image: "",
      },
      {
        title: "Data Analysis - Netflix Dataset",
        description:
          "Comprehensive data analysis and visualization of Netflix dataset including trends, genres, ratings, and country-wise distribution using Python and Jupyter.",
        technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
        githubLink: "https://github.com/Sree-kumaran/netflix-analysis",
        liveLink: "",
        category: "Data Science",
        featured: false,
        image: "",
      },
      {
        title: "REST API with Authentication",
        description:
          "A secure REST API built with Node.js and Express featuring JWT authentication, role-based access control, and comprehensive error handling.",
        technologies: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
        githubLink: "https://github.com/Sree-kumaran/rest-api",
        liveLink: "",
        category: "Backend",
        featured: false,
        image: "",
      },
      {
        title: "Chatbot with NLP",
        description:
          "An intelligent chatbot built with Python using natural language processing to understand user queries and provide relevant responses.",
        technologies: ["Python", "NLP", "NLTK", "Flask"],
        githubLink: "https://github.com/Sree-kumaran/chatbot-nlp",
        liveLink: "",
        category: "Machine Learning",
        featured: false,
        image: "",
      },
    ];

    portfolio.projects = projects;
    await portfolio.save();

    console.log(`✅ Seeded ${projects.length} projects successfully!`);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding projects:", error);
    process.exit(1);
  }
};

seedProjects();
