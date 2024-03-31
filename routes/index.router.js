const User = require("../models/User");
const express = require("express");
const router = express.Router();
const {
  homeView,
  aboutView,
  formView,
} = require("../controllers/index.controller");

router.get("/", homeView);
router.get("/about", aboutView);
router.get("/form", formView);

router.post("/submit-form", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
