const express = require('express')
const router = express.Router();
const sal = require('../models/salaryModel');

// Create API route for Create method in CRUD Operations
router.post("/adds", (req, res) => {
    sal.create({
        id: req.body.id,
        month: req.body.month,
        workingDays: req.body.workingDays,
        payRate: req.body.payRate,
        netSal: req.body.netSal,
    })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

// Create API route for Read method in CRUD Operations
router.get("/sals", (req, res) => {
    sal.find()
        .then((items) => res.json(items))
        .catch((err) => console.log(err));
});




// Create API route for Update method in CRUD Operations
//router.put("/update/:id", (req, res) => {
//emp.findByIdAndUpdate (
// { _id: req.params.id},
// {
//id: req.body.name,
//workingDays: req.body.workingDays,
//payRate: req.body.payRate,
// netSal: req.body.netSal,
//}
//)
//.then((doc) => console.log(doc))
//.catch((err) => console.log(err));

//});

module.exports = router;