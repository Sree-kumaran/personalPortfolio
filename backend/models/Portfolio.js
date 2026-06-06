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
  },
  { timestamps: true },
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
