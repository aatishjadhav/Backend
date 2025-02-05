const mongoose = require("mongoose");

const SmartphomeSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: Number,
        required: true,
    },
    operatingSystem: {
        type: String,
    },
    displaySize: {
        type: String,
    },
    storage: String,
    ram: String,
    cameraSpecs: {
        type: Object,
    },
    batteryCapacity: String,
    connectivity: [
        {
            type: String,
        },
    ],
    price: Number,
    colorsAvailable: [
        {
            type: String,
        },
    ],
    features: [
        {
            type: String,
        },
    ],

}, { timestamps: true },);

const Smartphone = mongoose.model("Smartphone", SmartphomeSchema);

module.exports = Smartphone;