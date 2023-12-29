const express = require("express");
const router = express.Router();
const User = require('../models/userModels');

// API Route for Login
router.post("/login", async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await User.findOne({ name, password });

        if (user) {
            const userData = {
                name: user.name,
                email: user.email,
                _id: user._id,
            };
            res.send(userData);
        } else {
            return res.status(400).json({ message: "Login Failed" });
        }
    } catch (error) {
        return res.status(400).json({ error });
    }
});

// API Route for Signup
router.post("/register", async (req, res) => {
    const { email, name, password } = req.body;

    const user = new User({
        email,
        name,
        password,
    });

    try {
        const newUser = await user.save();
        res.send("User Registered Successfully");
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;
