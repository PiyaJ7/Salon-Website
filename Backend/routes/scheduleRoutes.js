const express = require('express');
const router = express.Router();
const Schedule = require('../models/scheduleModel');

// Create API route for Create method in CRUD Operations
// router.post("/make", (req, res) => {
//     Schedule.create({
//         name: req.body.name,
//         contact: req.body.contact,
//         date: req.body.date,
//         time: req.body.time,
//         service: req.body.service
//     })
//         .then((doc) => console.log(doc))
//         .catch((err) => console.log(err));
// });
router.post("/make", async (req, res) => {
    try {
        const createdSchedule = await Schedule.create({
            name: req.body.name,
            contact: req.body.contact,
            date: req.body.date,
            time: req.body.time,
            service: req.body.service
        });

        console.log(createdSchedule);
        res.status(201).json({ message: "Schedule created successfully", schedule: createdSchedule });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error creating schedule" });
    }
});


// Create API route for Read method in CRUD Operations
// router.get("/schedules", (req, res) => {
//     Schedule.find()
//         .then((items) => res.json(items))
//         .catch((err) => console.log(err));
// });
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
// router.delete("/delete/:id", (req, res) => {
//     //create route for delete
//     Schedule.findByIdAndDelete({ _id: req.params.id })
//         .then((doc) => console.log(doc))
//         .catch((err) => console.log(err));
// });
router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedSchedule = await Schedule.findByIdAndDelete({ _id: req.params.id });
        console.log(deletedSchedule);
        res.status(200).json({ message: "Schedule deleted successfully", deletedSchedule: deletedSchedule });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error deleting schedule" });
    }
});


// Create API route for Update method in CRUD Operations
// router.put("/update/:id", (req, res) => {
//     Shedule.findByIdAndUpdate(
//         { _id: req.params.id },
//         {
//             name: req.body.name,
//             contact: req.body.contact,
//             email: req.body.email,
//             date: req.body.date,
//             time: req.body.time,
//             service: req.body.service,
//         }
//     )
//         .then((doc) => console.log(doc))
//         .catch((err) => console.log(err));

// });

router.put("/update/:id", async (req, res) => {
    try {
        const updatedSchedule = await Schedule.findByIdAndUpdate(
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

        console.log(updatedSchedule);
        res.status(200).json({ message: "Schedule updated successfully", updatedSchedule: updatedSchedule });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error updating schedule" });
    }
});


module.exports = router;