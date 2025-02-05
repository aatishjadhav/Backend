const mongoose = require("mongoose");

const GrapesSchema = new mongoose.Schema({
    itemImgUrl: String,
    itemName: String,
    itemDesc: String,
    caloryCount: Number,
    CarboCount: Number,
    proteinCount: String,
    fatCount: String,
});

const Item = mongoose.model("Item", GrapesSchema);

module.exports = Item;