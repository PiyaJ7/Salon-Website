const express = require('express');
const router = express.Router();
const Custom = require('../models/customPackModel');



router.post("/create", async (req, res) => {
    try {
        const createdCustom = await Custom.create({
            services: req.body.services,
            price: req.body.price
        });

        console.log(createdCustom);
        res.status(201).json({ message: "Custom created successfully", custom: createdCustom });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error creating Custom" });
    }
});






module.exports = router;