const Portfolio = require("../models/Portfolio");

const getPortfolio = async (req, res) => {
  try {
    const portfolios = await Portfolio.find().lean();

    return res.status(200).json({
      success: true,
      data: portfolios,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch portfolio information.",
    });
  }
};

const createPortfolio = async (req, res) => {
  try {
    const createdPortfolio = await Portfolio.create(req.body);

    return res.status(201).json({
      success: true,
      data: createdPortfolio,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to create portfolio information.",
    });
  }
};

const updatePortfolio = async (req, res) => {
  try {
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedPortfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedPortfolio,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to update portfolio information.",
    });
  }
};

module.exports = {
  getPortfolio,
  createPortfolio,
  updatePortfolio,
};
