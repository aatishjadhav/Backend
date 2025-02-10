const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },

  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

const todos = [

  { id: 1, title: 'Water the plants', day: 'Saturday' },

];

app.get("/", (req, res) => {
  res.send("Hello, Express server..");
});

app.post("/books", (req, res) => {
  const newBooks = req.body;

  if (!newBooks.title || !newBooks.author || !newBooks.year) {
    res.status(400).json({ error: "title, author and year is required" });
  } else {
    books.push(newBooks);
    res.status(201).json({ message: "New book added successfully", books: newBooks });
    
  }
});

app.post("/todos", (req, res) => {
  const newTodo = req.body;

  if (!newTodo.title || !newTodo.day) {
    res.status(400).json({ error: "title, and day is required" });
  } else {
    res.status(201).json({ message: "New todo added successfully", todos: newTodo });
    todos.push(newTodo);
  }
});

app.get("/books", (req, res) => {
  res.send(books);
});

app.get("/todos", (req, res) => {
  res.send(todos);
})

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
