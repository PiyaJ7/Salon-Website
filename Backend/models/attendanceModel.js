const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const attendanceSchema = mongoose.Schema(
    {
        date: {
            type: String,
            required: true
        },
        name: {
            type: String,
            trim: true
        },
        inTime: {
            type: String, // 
            required: true
        },
        outTime: {
            type: String,
            required: true
        },
        employee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employees" // Assuming this references the Employees model
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Attendances", attendanceSchema);
