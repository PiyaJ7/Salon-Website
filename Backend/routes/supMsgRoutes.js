const express = require('express');
const router = express.Router();
const Message = require('../models/supMsgModel');

// Create API route for Create method in CRUD Operations
router.post("/add", (req, res) => {
    Message.create({
        date: req.body.date,
        title: req.body.title,
        message: req.body.message

    })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

// Create API route for Read method in CRUD Operations
router.get("/msgs", (req, res) => {
    Message.find()
        .then((items) => res.json(items))
        .catch((err) => console.log(err));
});

router.delete("/delete/:id", (req, res) => {
    //create route for delete
    Message.findByIdAndDelete({ _id: req.params.id })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

// Create API route for Update method in CRUD Operations
router.put("/update/:id", (req, res) => {
    Supplier.findByIdAndUpdate(
        { _id: req.params.id },
        {
            date: req.body.date,
            title: req.body.title,
            msg: req.body.msg,
        }
    )
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));

});


module.exports = router;