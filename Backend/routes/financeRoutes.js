const express = require("express");
const router = express.Router();
const Finance = require("../models/financeModel");

// Create API route for Create method in CRUD Operations
router.post("/add", async (req, res) => {
  try {
    const createdFinance = await Finance.create({
      amount: req.body.amount,
      type: req.body.type,
      category: req.body.category,
      date: req.body.date,
      description: req.body.description,
      reference: req.body.reference,
    });

    console.log(createdFinance);
    res.status(201).send("Transaction Created Successfully");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating finance entry" });
  }
});

// Create API route for Read method in CRUD Operations
router.get("/trans", async (req, res) => {
  try {
    const financeEntries = await Finance.find();
    res.status(200).json(financeEntries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching finance entries" });
  }
});

// Create API route for Delete method in CRUD Operations
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedFinance = await Finance.findByIdAndDelete({
      _id: req.params.id,
    });
    console.log(deletedFinance);
    res.status(200).json({
      message: "Finance entry deleted successfully",
      deletedFinance: deletedFinance,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting finance entry" });
  }
});

// Create API route for Update method in CRUD Operations

router.get("/update/:id", async (req, res) => {
  try {
    const financialRecord = await Finance.findById(req.params.id);
    if (!financialRecord) {
      return res.status(404).json({ error: "Financial record not found" });
    }
    res.status(200).json(financialRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const updatedFinance = await Finance.findByIdAndUpdate(
      { _id: req.params.id },
      {
        amount: req.body.amount,
        type: req.body.type,
        category: req.body.category,
        date: req.body.date,
        description: req.body.description,
        reference: req.body.reference,
      },
      { new: true } // To return the updated document
    );

    console.log(updatedFinance);
    res.status(200).json({
      message: "Finance entry updated successfully",
      updatedFinance: updatedFinance,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating finance entry" });
  }
});

module.exports = router;
