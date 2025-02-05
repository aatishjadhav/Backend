const mongoose = require("mongoose");

const CreditSchema = new mongoose.Schema({
    cardName: String,
    cardNumber: Number,
    cardExpiryDate: Date,
    cardHoldersName: String,
    cardCompanyImgUrl: String,
});

const Credit = new mongoose.model("Credit", CreditSchema);

module.exports = Credit;