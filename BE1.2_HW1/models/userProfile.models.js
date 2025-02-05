const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    fullName: String,
    username: String,
    bio: String,
    profilePicUrl: String,
    followingCount: Number,
    followerCount: Number,
    companyName: String,
    location: String,
    portfolioUrl: String,
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
