const mongoose = require('mongoose')

const empSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        NIC: {
            type: String,
            required: true
        },
        joinedDate: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Employees", empSchema);