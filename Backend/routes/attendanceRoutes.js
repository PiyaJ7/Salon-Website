const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Attendance = require('../models/attendanceModel');

router.post("/create", async (req, res) => {
    try {
        //const { date, attendan, name } = req.body;
        const { date, name } = req.body;

        //const objectId = new mongoose.Types.ObjectId(attendan);

        const attendance = new Attendance({
            date: date,
            //attendance: objectId,
            name: name
        });

        const result = await attendance.save();
        res.status(201).json({ attendance: result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error creating attendance" });
    }
});

router.post("/add", (req, res) => {
    try {
        const { name, id, date, state } = req.body;

        Attendance.create({
            name: name,
            id: id,
            date: date,
            state: state
        })
            .then((doc) => {
                console.log(doc);
                res.status(200).json({ message: "Employee added successfully", employee: doc });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ error: "Error adding employee" });
            });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// router.get("/data", (req, res) => {
//     Attendance.find()
//         .then((items) => res.json(items))
//         .catch((err) => {
//             console.error(err);
//             res.status(500).json({ error: "Error fetching data" });
//         });
// });

router.get("/data", async (req, res) => {
    try {
        const items = await Attendance.find();
        res.status(200).json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error fetching data" });
    }
});


// router.delete("/delete/:id", (req, res) => {
//     Attendance.findByIdAndDelete({ _id: req.params.id })
//         .then((doc) => {
//             console.log(doc);
//             res.status(200).json({ message: "Attendance deleted successfully", deletedAttendance: doc });
//         })
//         .catch((err) => {
//             console.error(err);
//             res.status(500).json({ error: "Error deleting attendance" });
//         });
// });

router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedDoc = await Attendance.findByIdAndDelete(req.params.id);

        if (!deletedDoc) {
            // If the document with the given ID was not found
            return res.status(404).json({ error: "Document not found" });
        }

        console.log(deletedDoc);
        res.status(200).json({ message: "Attendance deleted successfully", deletedAttendance: deletedDoc });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error deleting attendance" });
    }
});


// router.put("/update/:id", (req, res) => {
//     Attendance.findByIdAndUpdate(
//         { _id: req.params.id },
//         {
//             name: req.body.name,
//             id: req.body.id,
//             date: req.body.date,
//             state: req.body.state,
//         }
//     )
//         .then((doc) => {
//             console.log(doc);
//             res.status(200).json({ message: "Attendance updated successfully", updatedAttendance: doc });
//         })
//         .catch((err) => {
//             console.error(err);
//             res.status(500).json({ error: "Error updating attendance" });
//         });
// });
router.put("/update/:id", async (req, res) => {
    try {
        const updatedDoc = await Attendance.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                id: req.body.id,
                date: req.body.date,
                state: req.body.state,
            },
            { new: true } // To return the updated document
        );

        if (!updatedDoc) {
            // If the document with the given ID was not found
            return res.status(404).json({ error: "Document not found" });
        }

        console.log(updatedDoc);
        res.status(200).json({ message: "Attendance updated successfully", updatedAttendance: updatedDoc });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error updating attendance" });
    }
});

router.post('/get/daily', async (req, res) => {
    try {
        const { date } = req.body;
        console.log(date);

        const data = await Attendance.find({ date: date }).populate("attendance", "name");
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error fetching daily attendance" });
    }
});

module.exports = router;
