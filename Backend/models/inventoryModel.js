const mongoose = require('mongoose');

const inventorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        rquantity: {
            type: Number,
            required: true
        },
        uquantity: {
            type: Number,
            required: true
        },
        totalPrice: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Products", inventorySchema);