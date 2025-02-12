const { initializeDatabase } = require("./db/db.connect");
const Post = require("./models/post.model");
const User = require("./models/user.model");

initializeDatabase();
const userData = {
  name: "John",
  email: "john@gmail.com",
};

const addUser = async () => {
  try {
    const newUser = new User(userData);
    await newUser.save();
  } catch (error) {
    console.log("Error", error);
  }
};

// addUser();

const postData = {
  title: "Greeting",
  content: "Have a good day!",
  author: "67ace08ef6d1b862c102c45d",
};

const addPost = async () => {
  try {
    const newPost = new Post(postData);
    await newPost.save();
    console.log("Post added successfully");
  } catch (error) {
    console.log(error);
  }
};

// addPost();

const getAllPosts = async () => {
  try {
    const allPosts = await Post.find().populate("author");
    console.log("All Posts: ", allPosts);
  } catch (error) {
    console.log(error);
  }
};

getAllPosts();
