const express = require("express");
const router = express.Router();
const sal = require("../models/salaryModel");

// Create API route for Create method in CRUD Operations
router.post("/adds", async (req, res) => {
  try {
    const createdSalary = await sal.create({
      id: req.body.id,
      month: req.body.month,
      workingDays: req.body.workingDays,
      payRate: req.body.payRate,
    });

    console.log(createdSalary);
    res
      .status(201)
      .json({
        message: "Salary entry created successfully",
        salary: createdSalary,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating salary entry" });
  }
});

// Create API route for Read method in CRUD Operations
router.get("/sals", async (req, res) => {
  try {
    const salaries = await sal.find();
    res.status(200).json(salaries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching salaries" });
  }
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
