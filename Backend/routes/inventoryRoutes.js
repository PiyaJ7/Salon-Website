const express = require('express');
const router = express.Router();
const Product = require('../models/inventoryModel');

// Create API route for Create method in CRUD Operations
router.post("/add", (req, res) => {
    Product.create({
        name: req.body.name,
        type: req.body.type,
        category: req.body.category,
        date: req.body.date,
        rquantity: req.body.rquantity,
        uquantity: req.body.uquantity,
        totalPrice: req.body.totalPrice
    })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

// Create API route for Read method in CRUD Operations
router.get("/products", (req, res) => {
    Product.find()
        .then((items) => res.json(items))
        .catch((err) => console.log(err));
});



// Create API route for Delete method in CRUD Operations
router.delete("/delete/:id", (req, res) => {
    //create route for delete
    Product.findByIdAndDelete({ _id: req.params.id })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

// Create API route for Update method in CRUD Operations
router.put("/update/:id", (req, res) => {
    Product.findByIdAndUpdate(
        { _id: req.params.id },
        {
            name: req.body.name,
            type: req.body.type,
            category: req.body.category,
            date: req.body.date,
            rquantity: req.body.rquantity,
            uquantity: req.body.uquantity,
            totalPrice: req.body.totalPrice,
        }
    )
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));

});

module.exports = router;