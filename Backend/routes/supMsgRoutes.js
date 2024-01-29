const express = require('express');
const router = express.Router();
const Message = require('../models/supMsgModel');

// Create API route for Create method in CRUD Operations
router.post("/add", async (req, res) => {
    try {
      const createdDoc = await Message.create({
        date: req.body.date,
        title: req.body.title,
        message: req.body.message
      });
  
      console.log(createdDoc);
      res.status(201).json({ message: "Message created successfully", createdMessage: createdDoc });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error creating message" });
    }
  });
  

// Create API route for Read method in CRUD Operations
router.get("/msgs", async (req, res) => {
    try {
      const items = await Message.find();
      res.status(200).json(items);  // Explicitly setting status code to 200
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error fetching messages" });
    }
  });
  


router.delete("/delete/:id", async (req, res) => {
    try {
      const deletedDoc = await Message.findByIdAndDelete(req.params.id);
  
      if (!deletedDoc) {
        // If the document with the given ID was not found
        return res.status(404).json({ error: "Document not found" });
      }
  
      console.log(deletedDoc);
      res.status(200).json({ message: "Message deleted successfully", deletedMessage: deletedDoc });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error deleting message" });
    }
  });
  

// Create API route for Update method in CRUD Operations
router.put("/update/:id", async (req, res) => {
    try {
      const updatedDoc = await Supplier.findByIdAndUpdate(
        req.params.id,
        {
          date: req.body.date,
          title: req.body.title,
          msg: req.body.msg,
        },
        { new: true } // To return the updated document
      );
  
      if (!updatedDoc) {
        // If the document with the given ID was not found
        return res.status(404).json({ error: "Document not found" });
      }
  
      console.log(updatedDoc);
      res.status(200).json({ message: "Supplier updated successfully", updatedSupplier: updatedDoc });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error updating supplier" });
    }
  });
  


module.exports = router;