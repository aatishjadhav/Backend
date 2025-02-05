const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  productImgUrl: String,
  starRating: {
    type: Number,
  },
  ratingsCount: {
    type: Number,
  },
  reviewsCount: {
    type: Number,
  },
  specialPrice: Number,
  originalPrice: Number,
  discountPercent: {
    type: Number,
  },
  availableOffers: [
    {
      type: String,
    },
  ],
  warranty: {
    type: String,
  },
  variant: [
    {
      type: String,
    },
  ],
  connectivity: {
    type: Boolean,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
