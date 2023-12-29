const mongoose = require('mongoose')

// DB SHCEMA AND MODEL
const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
    },

    {
        timestamps: true,
    }

);

module.exports = mongoose.model("Package", postSchema);