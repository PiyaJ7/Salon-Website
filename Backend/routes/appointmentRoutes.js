const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointmentModel');

// Create API route for Create method in CRUD Operations
router.post("/make", (req, res) => {
    Appointment.create({
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time,
        service: req.body.service
    })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});
