const Portfolio = require("../models/Portfolio");

// Get Portfolio
exports.getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    res.status(200).json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create Portfolio
exports.createPortfolio = async (req, res) => {
  try {
    const { name, email, github, linkedin, phone, about, education } = req.body;

    const portfolio = new Portfolio({
      name,
      email,
      github,
      linkedin,
      phone,
      about,
      education,
    });

    await portfolio.save();

    res.status(201).json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Portfolio
exports.updatePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, github, linkedin, phone, about, education } = req.body;

    const portfolio = await Portfolio.findByIdAndUpdate(
      id,
      {
        name,
        email,
        github,
        linkedin,
        phone,
        about,
        education,
      },
      { new: true, runValidators: true },
    );

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    res.status(200).json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
