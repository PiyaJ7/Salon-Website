const mongoose = require('mongoose');

// DB SHCEMA AND MODEL
const supMsgSchema = mongoose.Schema(
    {
        date: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }

);

module.exports = mongoose.model("supMangerMsg", supMsgSchema);
