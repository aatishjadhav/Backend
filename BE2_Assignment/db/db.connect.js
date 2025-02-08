const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.MONGODB;

const setupDB = async () => {
  await mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log("Error connecting to database");
    });
};

module.exports = { setupDB };
