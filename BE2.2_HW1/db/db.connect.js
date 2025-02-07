const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.MONGODB;

const initializeDatabase = async () => {
  await mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch((error) => {
      console.log("Error while connecting to database");
    });
};

module.exports = { initializeDatabase };
