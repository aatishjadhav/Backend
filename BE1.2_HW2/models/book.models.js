const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedYear: Number,
  genre: [
    {
      type: String,
      enum: [
        "Non-Fiction",
        "Self-help",
        "Mystery",
        "Thriller",
        "Fiction",
        "Historical",
        "Romance",
        "Fantasy",
      ],
    },
  ],
  language: String,
  country: {
    type: String,
    default: "United States",
  },
  rating: Number,
  summary: {
    type: String,
  },
  coverImageUrl: String,
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
