const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    title: String,
    productImgUrl: String,
    starRating: Number,
    ratingCount: Number,
    reviewsCount: Number,
    description: {
        type: String,
    },
    discountedPrice: Number,
    originalPrice: Number,
    discountPercent: Number,
    deliveryType: String,
    discountDaysLeft: String,
});

const Product = mongoose.model("Product", ProductsSchema);

module.exports = Product;