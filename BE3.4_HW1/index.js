const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },

  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },

  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];

const todos = [
  { id: 1, title: "Water the plants", day: "Saturday" },

  { id: 2, title: "Go for a walk", day: "Sunday" },
];

app.get("/", (req, res) => {
  res.send("Hello from express Server...");
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;

  const index = books.findIndex((book) => book.id == bookId);

  if (index === -1) {
    res.status(404).json({ error: "Book not found" });
  } else {
    books.splice(index, 1);
    res.status(200).json({ message: "Book deleted successfully" });
  }
});

app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;

  const index = todos.findIndex((todo) => todo.id == todoId);
  if (index === -1) {
    res.status(404).json({ error: "Todo does not exist" });
  } else {
    books.splice(index, 1);
    res.status(200).json({ message: "todo deleted successfully" });
  }
});

app.get("/books", (req, res) => {
  res.send(books);
});

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const updateBookData = req.body;

  const bookToUpdate = books.find((book) => book.id == bookId);

  if (!bookToUpdate) {
    res.status(404).json({ error: "Movie not found" });
  } else {
    Object.assign(bookToUpdate, updateBookData);
    res
      .status(200)
      .json({ message: "Movie updated successfully", movie: bookToUpdate });
  }
});

app.post("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const updateTodoData = req.body;

  const todoToUpdate = todos.find((todo) => todo.id == todoId);

  if (!todoToUpdate) {
    res.status(404).json({ error: "Todo does not exist" });
  } else {
    Object.assign(todoToUpdate, updateTodoData);
    res
      .status(200)
      .json({ message: "Todo updated successfully", todo: todoToUpdate });
  }
});

app.listen(PORT, (req, res) => {
  console.log("Server running on port", PORT);
});
