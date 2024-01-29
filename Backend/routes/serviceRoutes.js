const express = require("express");
const router = express.Router();
const Service = require("../models/serviceModel");

// Create API route for Create method in CRUD Operations

router.post("/create", async (req, res) => {
  try {
    const newService = await Service.create({
      sName: req.body.sName,
      sPrice: req.body.sPrice,
      sCategory: req.body.sCategory,
    });

    console.log(newService);
    res.status(201).send("Service Created Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error Creating Service");
  }
});

// Create API route for Read method in CRUD Operations
// router.get("/posts", (req, res) => {
//     Service.find()
//         .then((items) => res.json(items))
//         .catch((err) => console.log(err));
// });
router.get("/posts", async (req, res) => {
  try {
    const items = await Service.find();
    res.status(200).json(items);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create API route for Delete method in CRUD Operations
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedDoc = await Service.findByIdAndDelete({ _id: req.params.id });
    console.log(deletedDoc);
    res.status(200).send("Service Deleted Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error Deleting Service");
  }
});

// Create API route for Update method in CRUD Operations

router.get("/update/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.status(200).json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const updatedDoc = await Service.findByIdAndUpdate(
      { _id: req.params.id },
      {
        sName: req.body.sName,
        sPrice: req.body.sPrice,
        sCategory: req.body.sCategory,
      },
      { new: true } // To return the updated document
    );

    console.log(updatedDoc);
    res.status(200).send("Service Updated Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error Updating Service");
  }
});

module.exports = router;
