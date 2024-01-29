const express = require("express");
const router = express.Router();
const Schedule = require("../models/scheduleModel");

// Create API route for Create method in CRUD Operations
router.post("/make", async (req, res) => {
  try {
    const newSchedule = await Schedule.create({
      name: req.body.name,
      contact: req.body.contact,
      date: req.body.date,
      time: req.body.time,
      service: req.body.service,
    });

    console.log(newSchedule);
    res
      .status(201)
      .json({ message: "Post created successfully", data: newSchedule });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create API route for Read method in CRUD Operations

router.get("/schedules", async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).json(schedules);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching schedules" });
  }
});


// Create API route for Delete method in CRUD Operations
router.delete("/delete/:id", async (req, res) => {
  try {
    const doc = await Schedule.findById(req.params.id);

    if (!doc) {
      return res.status(404).json({ error: "Document not found" });
    }

    await Schedule.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Document deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// router.delete("/delete/:id", async (req, res) => {
//   try {
//       const deletedSchedule = await Schedule.findByIdAndDelete({ _id: req.params.id });
//       console.log(deletedSchedule);
//       res.status(200).json({ message: "Schedule deleted successfully", deletedSchedule: deletedSchedule });
//   } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: "Error deleting schedule" });
//   }
// });

// Create API route for Update method in CRUD Operations
router.get("/update/:id", async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule) {
      return res.status(404).json({ error: "Schedule not found" });
    }
    res.status(200).json(schedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/update/:id", (req, res) => {
  Schedule.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
      date: req.body.date,
      time: req.body.time,
      service: req.body.service,
    },
    { new: true } // To return the updated document
  )
    .then((updatedSchedule) => {
      if (!updatedSchedule) {
        return res.status(404).json({ error: "Schedule not found" });
      }
      res.status(200).json(updatedSchedule);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

module.exports = router;
