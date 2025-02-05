const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cuisine: [
        {
            type: String,
            enum: ['Italian', 'Mexican', 'Chinese', 'Indian', 'American', 'French', 'Japanese', 'Mediterranean', 'Thai', 'Vegetarian', 'Vegan', 'Other'],
        },
    ],
    location: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    phone: String,
    website: String,
    openingYear: Number,
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    specialDishes: [
        {
            type: String,
        },
    ],
    photourls: [
        {
            type: String,
        },
    ],

}, { timestamps: true },);

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;