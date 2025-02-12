const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
