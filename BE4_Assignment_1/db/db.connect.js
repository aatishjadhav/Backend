const mongoose = require("mongoose");
require("dotenv").config();

const MongoUri = process.env.MONGODB;

const initializeDB = async () => {
  mongoose
    .connect(MongoUri)
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch((error) => {
      console.log("Error while connecting to database", error);
    });
};

module.exports = { initializeDB };
