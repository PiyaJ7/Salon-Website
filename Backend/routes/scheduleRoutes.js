const express = require('express');
const router = express.Router();
const Schedule = require('../models/scheduleModel');

// Create API route for Create method in CRUD Operations
router.post("/make", (req, res) => {
    Schedule.create({
        name: req.body.name,
        contact: req.body.contact,
        date: req.body.date,
        time: req.body.time,
        service: req.body.service
    })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

// Create API route for Read method in CRUD Operations
router.get("/schedules", (req, res) => {
    Schedule.find()
        .then((items) => res.json(items))
        .catch((err) => console.log(err));
});



// Create API route for Delete method in CRUD Operations
router.delete("/delete/:id", (req, res) => {
    //create route for delete
    Schedule.findByIdAndDelete({ _id: req.params.id })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

// Create API route for Update method in CRUD Operations
router.put("/update/:id", (req, res) => {
    Shedule.findByIdAndUpdate(
        { _id: req.params.id },
        {
            name: req.body.name,
            contact: req.body.contact,
            email: req.body.email,
            date: req.body.date,
            time: req.body.time,
            service: req.body.service,
        }
    )
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));

});

module.exports = router;