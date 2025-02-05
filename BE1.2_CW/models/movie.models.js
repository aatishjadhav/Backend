const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    genre: [
      {
        type: String,
        enum: [
          "Action",
          "Comedy",
          "Drama",
          "Thriller",
          "Romance",
          "Sci-Fi",
          "Horror",
          "Fantasy",
          "Sports",
          "Musical",
          "other",
        ],
      },
    ],
    director: {
      type: String,
      required: true,
    },
    actors: [
      {
        type: String,
      },
    ],
    country: {
      type: String,
      default: "India",
    },
    rating: {
      type: String,
      min: 0,
      max: 10,
      default: 0,
    },
    plot: {
      type: String,
    },
    awards: {
      type: String,
    },
    posterURL: {
      type: String,
    },
    trailerURL: {
      type: String,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
