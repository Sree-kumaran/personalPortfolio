const express = require("express");
const {
  getPortfolio,
  createPortfolio,
  updatePortfolio,
} = require("../controllers/portfolioController");

const router = express.Router();

router.get("/", getPortfolio);
router.post("/", createPortfolio);
router.put("/:id", updatePortfolio);

module.exports = router;
