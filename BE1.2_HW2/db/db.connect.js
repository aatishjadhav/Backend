const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.MONGODB;

const setupDatabase = async () => {
  await mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("Connected to databse successfully");
    })
    .catch((error) => {
      console.log("Error while connecting to daatabase");
    });
};

module.exports = { setupDatabase };
