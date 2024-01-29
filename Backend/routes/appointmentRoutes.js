const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointmentModel");

// Create API route for Create method in CRUD Operations

router.post("/make", async (req, res) => {
  try {
    const newAppointment = await Appointment.create({
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
      date: req.body.date,
      time: req.body.time,
      service: req.body.service,
    });

    console.log(newAppointment);
    res.status(201).send("Appointment Created Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error Creating Appointment");
  }
});

router.post("/make2", async (req, res) => {
  const { name, contact, email, date, time, service } = req.body;

  try {
    newAppoiment = {
      name,
      contact,
      email,
      date,
      time,
      service,
    };

    const createAppoiment = new Appointment(newAppoiment);
    await createAppoiment.save();
    res
      .status(201)
      .send({
        status: "Appoiment created successfully",
        appoiment: createAppoiment,
      });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
});

//Create API route for Read method in CRUD Operations

router.get("/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/appointment/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    res.status(200).json(appointment);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// router.get("/appointment/:id", (req, res) => {
//     let postId = req.params.id;

//     Appointment.findById(postId, (err, post) => {
//         if (err) {
//             return res.status(400).json({
//                 success: false, err
//             });
//         }
//         return res.status(200).json({
//             success: true, post
//         });
//     });
// });

// Create API route for Delete method in CRUD Operations

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete({
      _id: req.params.id,
    });
    console.log(deletedAppointment);
    res.status(200).send("Appointment Deleted Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error Deleting Appointment");
  }
});

// Create API route for Update method in CRUD Operations

router.put("/update/:id", async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time,
        service: req.body.service,
      },
      { new: true } // To return the updated document
    );

    console.log(updatedAppointment);
    res.status(200).send("Appointment Updated Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error Updating Appointment");
  }
});

module.exports = router;
