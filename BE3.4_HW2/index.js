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

  {
    id: 3,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
  },
];

const items = [
  { id: 1, itemName: "Spoon", color: "Silver", quantity: 8 },

  { id: 2, itemName: "Fork", color: "Silver", quantity: 8 },

  { id: 3, itemName: "Plate", color: "Off-White", quantity: 6 },
];

app.get("/", (req, res) => {
  res.send("Hello, Express Server..");
});

app.delete("/movies/:id", (req, res) => {
  const movieId = req.params.id;
  const index = movies.findIndex((movie) => movie.id == movieId);

  if (index === -1) {
    res.status(404).json({ error: "Movie not found" });
  } else {
    movies.splice(index, 1);
    res.status(200).json({ message: "Movie deleted successfully" });
  }
});

app.delete("/items/:id", (req, res) => {
  const itemId = req.params.id;
  const index = items.findIndex((item) => item.id == itemId);

  if (index === -1) {
    res.status(404).json({ error: "Item not found" });
  } else {
    items.splice(index, 1);
    res.status(200).json({ message: "Item deleted successfully" });
  }
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

app.get("/items", (req, res) => {
  res.send(items);
});

app.post("/movies/:id", (req, res) => {
  const movieId = req.params.id;
  const updateMovieData = req.body;

  const movieToUpdate = movies.find((movie) => movie.id == movieId);

  if (!movieToUpdate) {
    res.status(404).json({ error: "Movie not found" });
  } else {
    Object.assign(movieToUpdate, updateMovieData);
    res
      .status(200)
      .json({ message: "Movie updated successfully", movie: movieToUpdate });
  }
});

app.post("/items/:id", (req, res) => {
  const itemId = req.params.id;
  const updateItemData = req.body;

  const itemToUpdate = items.find((item) => item.id == itemId);

  if (!itemToUpdate) {
    res.status(404).json({ error: "Item not found" });
  } else {
    Object.assign(itemToUpdate, updateItemData);
    res
      .status(200)
      .json({ message: "Items updated successfully", item: itemToUpdate });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
