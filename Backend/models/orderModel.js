const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        product: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("orders", orderSchema);