const express = require("express");
const router = express.Router();
const User = require("../models/userModels");

// API Route for Login
router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({
      name: req.body.username,
      password: req.body.password,
    });
    if (user) {
      const userData = {
        name: user.name,
        email: user.email,
        _id: user._id,
      };
      res.status(200).json({ data: userData, message: "logged IN" });
    } else {
      return res.status(400).json({ message: "Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

// API Route for Signup
router.post("/register", async (req, res) => {
  console.log(req.body);
  const user = new User({
    email: req.body.email,
    name: req.body.username,
    password: req.body.password,
  });

  try {
    const newUser = await user.save();
    console.log(newUser);
    return res
      .status(201)
      .json({ data: newUser, message: "User Registered Successfully" });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
