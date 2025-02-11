const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello, Express JS");
});

app.get("/products", (req, res) => {
  res.send("Browse our products here.");
});

app.get("/services", (req, res) => {
  res.send("Explore our services.");
});

app.get("/faq", (req, res) => {
  res.send("Frequently Asked Questions");
});

app.get("/gallery", (reqq, res) => {
  res.send("View our gallery");
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
