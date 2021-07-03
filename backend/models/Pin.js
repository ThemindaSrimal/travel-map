const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
        },
        title: {
            type: String,
            require: true,
            min: 3
        },
        desc: {
            type: String,
            require: true,
            min: 3
        },
        rating: {
            type: Number,
            rquire: true,
            min: 0,
            max: 5,
        },
        lat: {
            type: Number,
            rquire: true,
        },
        long: {
            type: Number,
            rquire: true,
        }    
    },
    {Timestamp: true}
);

module.exports = mongoose.model("Pin", PinSchema);