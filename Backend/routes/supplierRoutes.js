const express = require("express");
const router = express.Router();
const Supplier = require("../models/supplierModel");

// Create API route for Create method in CRUD Operations
router.post("/add", async (req, res) => {
  try {
    const createdDoc = await Supplier.create({
      name: req.body.name,
      product: req.body.product,
      contact: req.body.contact,
      email: req.body.email,
      status: req.body.status,
      date: req.body.date,
      quantity: req.body.quantity,
      price: req.body.price,
    });

    console.log(createdDoc);
    res
      .status(201)
      .json({
        message: "Supplier created successfully",
        createdSupplier: createdDoc,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating supplier" });
  }
});

// Create API route for Read method in CRUD Operations
router.get("/sups", async (req, res) => {
  try {
    const items = await Supplier.find();
    res.status(200).json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching suppliers" });
  }
});

// Create API route for Delete method in CRUD Operations
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedDoc = await Supplier.findByIdAndDelete(req.params.id);

    if (!deletedDoc) {
      // If the document with the given ID was not found
      return res.status(404).json({ error: "Document not found" });
    }

    console.log(deletedDoc);
    res
      .status(200)
      .json({
        message: "Supplier deleted successfully",
        deletedSupplier: deletedDoc,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting supplier" });
  }
});



// Create API route for Update method in CRUD Operations
router.get("/update/:id", async (req, res) => {
  try {
    const updateSup = await Supplier.findById(req.params.id);
    if (!updateSup) {
      return res.status(404).json({ error: "Supplier not found" });
    }
    res.status(200).json(updateSup);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const updatedDoc = await Supplier.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        product: req.body.product,
        contact: req.body.contact,
        email: req.body.email,
        status: req.body.status,
        date: req.body.date,
        quantity: req.body.quantity,
        price: req.body.price,
      },
      { new: true } // To return the updated document
    );

    if (!updatedDoc) {
      // If the document with the given ID was not found
      return res.status(404).json({ error: "Document not found" });
    }

    console.log(updatedDoc);
    res
      .status(200)
      .json({
        message: "Supplier updated successfully",
        updatedSupplier: updatedDoc,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating supplier" });
  }
});

module.exports = router;
