const express = require("express");
const router = express.Router();
const Supplier = require("../models/orderModel");

// Create API route for Create method in CRUD Operations
router.post("/add", async (req, res) => {
  try {
    const createdSupplier = await Supplier.create({
      name: req.body.name,
      product: req.body.product,
      date: req.body.date,
      quantity: req.body.quantity,
      price: req.body.price,
      status: req.body.status,
    });

    console.log(createdSupplier);
    res
      .status(201)
      .json({
        message: "Supplier created successfully",
        supplier: createdSupplier,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating supplier" });
  }
});

// Create API route for Read method in CRUD Operations
router.get("/ords", async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.status(200).json(suppliers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching suppliers" });
  }
});

// Create API route for Delete method in CRUD Operations
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedSupplier = await Supplier.findByIdAndDelete({
      _id: req.params.id,
    });
    console.log(deletedSupplier);
    res.json({
      message: "Supplier deleted successfully",
      deletedSupplier: deletedSupplier,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting supplier" });
  }
});


// Create API route for Update method in CRUD Operations
router.get("/update/:id", async (req, res) => {
  try {
    const orderUpdate = await Supplier.findById(req.params.id);
    if (!orderUpdate) {
      return res.status(404).json({ error: "Updated Order not found" });
    }
    res.status(200).json(orderUpdate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        product: req.body.product,
        date: req.body.date,
        quantity: req.body.quantity,
        price: req.body.price,
        status: req.body.status,
      },
      { new: true } // To return the updated document
    );

    console.log(updatedSupplier);
    res
      .status(200)
      .json({
        message: "Supplier updated successfully",
        updatedSupplier: updatedSupplier,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating supplier" });
  }
});

module.exports = router;
