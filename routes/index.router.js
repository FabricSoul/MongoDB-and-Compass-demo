const User = require("../models/User");
const express = require("express");
const methodOverride = require("method-override");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(methodOverride("_method"));

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
    const { name, email, age, address } = req.body;

    const user = new User({ name, email, age, address });

    console.log(user);

    await user.save();

    res.redirect("/form-success");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/form-success", async (req, res) => {
  try {
    const users = await User.find();

    res.render("pages/form-success", {
      title: "Form Success",
      active: "form",
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/update-user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const updates = req.body;

    await User.findByIdAndUpdate(userId, updates);

    res.redirect("/form-success");
  } catch (error) {
    console.error(error);
    res.status(500).send("There was an error updating the user.");
  }
});

router.delete("/delete-user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    await User.findByIdAndDelete(userId);

    res.redirect("/form-success");
  } catch (error) {
    console.error(error);
    res.status(500).send("There was an error deleting the user.");
  }
});

module.exports = router;
