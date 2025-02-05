const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstname: String,
    lastName: String,
    birthDate: Date,
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePictureUrl: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserProfileSchema);

module.exports = User;