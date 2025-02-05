const mongoose = require("mongoose");

const MusicAlbumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: [
        "Rock",
        "Pop",
        "Hip-Hop",
        "Jazz",
        "Classical",
        "Country",
        "Electronic",
        "R&B",
        "Raggae",
        "Indie",
      ],
    },
    releaseYear: Number,
    recordLabel: {
      type: String,
    },
    format: {
      type: String,
    },
    isExplicit: {
      type: Boolean,
      default: false,
    },
    isAvailableOnStreaming: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Album = mongoose.model("Album", MusicAlbumSchema);

module.exports = Album;
