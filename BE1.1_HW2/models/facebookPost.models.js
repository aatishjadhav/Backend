const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userPhotoUrl: String,
  isVerified: {
    type: Boolean,
  },
  postedDate: {
    type: Date,
  },
  postedTime: {
    type: Number,
  },
  description: {
    type: String,
  },
  postedImgUrl: String,
  likeCount: Number,
  commentCount: Number,
  shareCount: Number,
});

const Post = mongoose.model("Post", PostsSchema);

module.exports = Post;
