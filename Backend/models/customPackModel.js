const mongoose = require('mongoose');

const customPackSchema = mongoose.Schema(
    {
        services: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("CustomPacks", customPackSchema);