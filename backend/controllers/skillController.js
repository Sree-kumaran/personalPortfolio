const Portfolio = require("../models/Portfolio");

// Get all skills
exports.getSkills = async (req, res) => {
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
      data: portfolio.skills || [],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add skill category
exports.addSkill = async (req, res) => {
  try {
    const { category, technologies } = req.body;

    if (!category || !technologies || technologies.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Category and technologies are required",
      });
    }

    const portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    // Check if category already exists
    const existingCategory = portfolio.skills.findIndex(
      (skill) => skill.category.toLowerCase() === category.toLowerCase(),
    );

    if (existingCategory !== -1) {
      return res.status(400).json({
        success: false,
        message: "Skill category already exists",
      });
    }

    portfolio.skills.push({
      category,
      technologies,
    });

    await portfolio.save();

    res.status(201).json({
      success: true,
      data: portfolio.skills,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update skill category
exports.updateSkill = async (req, res) => {
  try {
    const { category } = req.params;
    const { technologies } = req.body;

    if (!technologies || technologies.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Technologies are required",
      });
    }

    const portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    const skillIndex = portfolio.skills.findIndex(
      (skill) => skill.category.toLowerCase() === category.toLowerCase(),
    );

    if (skillIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Skill category not found",
      });
    }

    portfolio.skills[skillIndex].technologies = technologies;
    await portfolio.save();

    res.status(200).json({
      success: true,
      data: portfolio.skills,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete skill category
exports.deleteSkill = async (req, res) => {
  try {
    const { category } = req.params;

    const portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    const skillIndex = portfolio.skills.findIndex(
      (skill) => skill.category.toLowerCase() === category.toLowerCase(),
    );

    if (skillIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Skill category not found",
      });
    }

    portfolio.skills.splice(skillIndex, 1);
    await portfolio.save();

    res.status(200).json({
      success: true,
      data: portfolio.skills,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
