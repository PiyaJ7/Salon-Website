const express = require('express');
const router = express.Router();
const Finance = require('../models/financeModel');

// Create API route for Create method in CRUD Operations
router.post("/add", (req, res) => {
    Finance.create({
        amount: req.body.amount,
        type: req.body.type,
        category: req.body.category,
        date: req.body.date,
        description: req.body.description,
        reference: req.body.reference
    })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

// Create API route for Read method in CRUD Operations
router.get("/trans", (req, res) => {
    Finance.find()
        .then((items) => res.json(items))
        .catch((err) => console.log(err));
});