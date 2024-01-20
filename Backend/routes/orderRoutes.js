const express = require('express')
const router = express.Router();
const Supplier = require('../models/orderModel');

// Create API route for Create method in CRUD Operations
// router.post("/add", (req, res) => {
//     Supplier.create({
//         name: req.body.name,
//         product: req.body.product,
//         date: req.body.date,
//         quantity: req.body.quantity,
//         price: req.body.price,
//         status: req.body.status
//     })
//         .then((doc) => console.log(doc))
//         .catch((err) => console.log(err));
// });
router.post("/add", async (req, res) => {
    try {
        const createdSupplier = await Supplier.create({
            name: req.body.name,
            product: req.body.product,
            date: req.body.date,
            quantity: req.body.quantity,
            price: req.body.price,
            status: req.body.status
        });

        console.log(createdSupplier);
        res.json({ message: "Supplier created successfully", supplier: createdSupplier });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error creating supplier" });
    }
});


// Create API route for Read method in CRUD Operations
// router.get("/ords", (req, res) => {
//     Supplier.find()
//         .then((items) => res.json(items))
//         .catch((err) => console.log(err));
// });
router.get("/ords", async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error fetching suppliers" });
    }
});




// Create API route for Delete method in CRUD Operations
// router.delete("/delete/:id", (req, res) => {
//     //create route for delete
//     Supplier.findByIdAndDelete({ _id: req.params.id })
//         .then((doc) => console.log(doc))
//         .catch((err) => console.log(err));
// });
router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedSupplier = await Supplier.findByIdAndDelete({ _id: req.params.id });
        console.log(deletedSupplier);
        res.json({ message: "Supplier deleted successfully", deletedSupplier: deletedSupplier });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error deleting supplier" });
    }
});


// Create API route for Update method in CRUD Operations
router.put("/update/:id", (req, res) => {
    Supplier.findByIdAndUpdate(
        { _id: req.params.id },
        {
            name: req.body.name,
            product: req.body.product,
            date: req.body.date,
            quantity: req.body.quantity,
            price: req.body.price,
            status: req.body.status,



        }
    )
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));

});

module.exports = router;