const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    github: String,
    linkedin: String,
    phone: String,
    about: String,
    education: String,
    skills: [
      {
        category: String,
        technologies: [String],
      },
    ],
    projects: [
      {
        title: String,
        description: String,
        technologies: [String],
        githubLink: String,
        liveLink: String,
        category: String,
        featured: Boolean,
        image: String,
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
