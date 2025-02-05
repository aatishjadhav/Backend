const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productName: String,
    productImgUrl: String,
    productType: String,
    productInfo: String,
    color: [
        {
            type: String,
            default: "orange",
            enum: ["blue", "red", "green", "orange", "black"],
        },
        
        
    ],
    size: [
        {
            type: Number,
            default: 9,
            enum: [7, 8, 9, 10, 11],
        },
    ],
    price: Number
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;