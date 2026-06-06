const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      default: "",
      trim: true,
    },
    github: {
      type: String,
      default: "",
      trim: true,
    },
    linkedin: {
      type: String,
      default: "",
      trim: true,
    },
    phone: {
      type: String,
      default: "",
      trim: true,
    },
    about: {
      type: String,
      required: true,
      trim: true,
    },
    education: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
