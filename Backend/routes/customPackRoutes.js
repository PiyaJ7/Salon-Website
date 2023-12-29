const express = require('express');
const router = express.Router();
const Custom = require('../models/customPackModel');

router.post("/create", (req, res) => {
    Custom.create({
        services: req.body.services,
        price: req.body.price
    })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

module.exports = router;