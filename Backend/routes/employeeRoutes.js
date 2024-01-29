const express = require("express");
const router = express.Router();
const emp = require("../models/employeeModel");

// Create API route for Create method in CRUD Operations
router.post("/add", async (req, res) => {
  try {
    const createdEmployee = await emp.create({
      name: req.body.name,
      id: req.body.id,
      position: req.body.position,
      NIC: req.body.NIC,
      joinedDate: req.body.joinedDate,
      address: req.body.address,
      phoneNo: req.body.phoneNo,
    });

    console.log(createdEmployee);
    res
      .status(201)
      .json({
        message: "Employee added successfully",
        employee: createdEmployee,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error adding employee" });
  }
});

// Create API route for Read method in CRUD Operations
router.get("/emps", async (req, res) => {
  try {
    const employees = await emp.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching employees" });
  }
});

// Create API route for Delete method in CRUD Operations
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedEmployee = await emp.findByIdAndDelete({ _id: req.params.id });
    console.log(deletedEmployee);
    res
      .status(200)
      .json({
        message: "Employee deleted successfully",
        deletedEmployee: deletedEmployee,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting employee" });
  }
});


// Create API route for get in Update method in CRUD Operations
router.get("/update/:id", async (req, res) => {
  try {
    const getupdatedEmployee = await emp.findById(req.params.id);
    if (!getupdatedEmployee) {
      return res.status(404).json({ error: "Schedule not found" });
    }
    res.status(200).json(getupdatedEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const updatedEmployee = await emp.findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        id: req.body.id,
        position: req.body.position,
        NIC: req.body.NIC,
        joinedDate: req.body.joinedDate,
        address: req.body.address,
        phoneNo: req.body.phoneNo,
      },
      { new: true } // To return the updated document
    );

    console.log(updatedEmployee);
    res
      .status(200)
      .json({
        message: "Employee updated successfully",
        updatedEmployee: updatedEmployee,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating employee" });
  }
});

module.exports = router;
