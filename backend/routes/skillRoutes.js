const express = require("express");
const {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");

const router = express.Router();

router.get("/", getSkills);
router.post("/", addSkill);
router.put("/:category", updateSkill);
router.delete("/:category", deleteSkill);

module.exports = router;
