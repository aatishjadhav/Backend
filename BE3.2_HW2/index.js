const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const movies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },

  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },
];

const items = [

  { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},

 { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 }

];

app.get("/", (req, res) => {
  res.send("Express Server..");
});

app.post("/movies", (req, res) => {
  const newMovie = req.body;

  if (!newMovie.title || !newMovie.year) {
    res.status(400).json({ error: "title and year is required" });
  } else {
    movies.push(newMovie);
    res
      .status(201)
      .json({ message: "New movie added successfully", movies: newMovie });
  }
});

app.post("/items", (req, res) => {
  const newItem = req.body;

  if (!newItem.itemName || !newItem.color || !newItem.quantity) {
    res.status(400).json({ error: "Item name, color and quantity is required" });
  } else {
    items.push(newItem);
    res.status(201).json({ message: "New item is added successfully", items: newItem });
  }
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

app.get("/items", (req, res) => {
  res.send(items);
})

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
