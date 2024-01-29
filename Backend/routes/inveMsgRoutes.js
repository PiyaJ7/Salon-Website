const express = require('express');
const router = express.Router();
const InvMessage = require('../models/inveMsgModel');

// Create API route for Create method in CRUD Operations

router.post("/add", async (req, res) => {
    try {
        const createdInvMessage = await InvMessage.create({
            date: req.body.date,
            title: req.body.title,
            message: req.body.message
        });

        console.log(createdInvMessage);
        res.status(201).json({ message: "Inventory message created successfully", invMessage: createdInvMessage });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error creating inventory message" });
    }
});


// Create API route for Read method in CRUD Operations
router.get("/imsgs", async (req, res) => {
    try {
        const inventoryMessages = await InvMessage.find();
        res.json(inventoryMessages);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error fetching inventory messages" });
    }
});


// Create API route for Update method in CRUD Operations

router.put("/update/:id", async (req, res) => {
    try {
        const updatedSupplier = await Supplier.findByIdAndUpdate(
            { _id: req.params.id },
            {
                date: req.body.date,
                title: req.body.title,
                msg: req.body.msg,
            },
            { new: true } // To return the updated document
        );

        console.log(updatedSupplier);
        res.status(200).json({ message: "Supplier updated successfully", updatedSupplier: updatedSupplier });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error updating supplier" });
    }
});



module.exports = router;