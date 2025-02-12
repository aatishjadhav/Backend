const express = require("express");
const app = express();
app.use(express.json());

const { initializeDB } = require("./db/db.connect");
const Book = require("./models/book.models");

initializeDB();

const PORT = process.env.PORT;

async function createNewBook(books) {
  try {
    const saveData = new Book(books);
    const saveBookData = await saveData.save();
    return saveBookData;
  } catch (error) {
    console.log(error);
  }
}

app.post("/books", async (req, res) => {
  try {
    const savedData = await createNewBook(req.body);
    if (savedData) {
      res
        .status(201)
        .json({ message: "New book added successfully", book: savedData });
    } else {
      res.status(404).json({ error: "Error while adding new book" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to add new book data", error });
  }
});

async function readAllBooks() {
  try {
    const getAllBooks = await Book.find();
    return getAllBooks;
  } catch (error) {
    console.log(error);
  }
}

app.get("/books", async (req, res) => {
  try {
    const getBookData = await readAllBooks();
    if (getBookData) {
      res.send(getBookData);
    } else {
      res.status(400).json({ error: "Error while fetching books data", error });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get all book data", error });
  }
});

async function getBookTitle(bookTitle) {
  try {
    const getBook = await Book.find({ title: bookTitle });
    return getBook;
  } catch (error) {
    console.log(error);
  }
}

app.get("/books/:bookTitle", async (req, res) => {
  try {
    const getBookByTitle = await getBookTitle(req.params.bookTitle);
    if (getBookByTitle) {
      res
        .status(200)
        .json({ message: "Book fetched successfully", book: getBookByTitle });
    } else {
      res.status(404).json({ error: "Book not found", error });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get all book data", error });
  }
});

async function getBookAuthor(author) {
  try {
    const getBook = await Book.find({ author: author });
    return getBook;
  } catch (error) {
    console.log(error);
  }
}

app.get("/books/authors/:bookAuthor", async (req, res) => {
  try {
    const getBookByAuthor = await getBookAuthor(req.params.bookAuthor);
    if (getBookByAuthor) {
      res.status(200).json({
        message: "Book fetched by author name successfully",
        book: getBookByAuthor,
      });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get all book data", error });
  }
});

async function getBookGenre(genre) {
  try {
    const getBook = await Book.find({ genre: genre });
    return getBook;
  } catch (error) {
    console.log(error);
  }
}

app.get("/books/genres/:bookGenre", async (req, res) => {
  try {
    const getBookByGenre = await getBookGenre(req.params.bookGenre);
    if (getBookByGenre.length !== 0) {
      res.status(200).json({
        message: "Book fetched by genre successfully",
        book: getBookByGenre,
      });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get all book data", error });
  }
});

async function getBookRelease(releaseYear) {
  try {
    const getBook = await Book.find({ publishedYear: releaseYear });
    return getBook;
  } catch (error) {
    console.log(error);
  }
}

app.get("/books/year/:publishYear", async (req, res) => {
  try {
    const getBookYear = await getBookRelease(req.params.publishYear);
    if (getBookYear !== 0) {
      res
        .status(200)
        .json({ message: "Book fetched successfully", book: getBookYear });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get all book data", error });
  }
});

async function updateBook(bookId, dataToUpdate) {
  try {
    const book = await Book.findByIdAndUpdate(bookId, dataToUpdate, {
      new: true,
    });
    return book;
  } catch (error) {
    console.log(error);
  }
}

app.post("/books/:bookId", async (req, res) => {
  try {
    const dataToUpdate = await updateBook(req.params.bookId, req.body);
    if (dataToUpdate) {
      res
        .status(200)
        .json({ message: "Book updated successfully", book: dataToUpdate });
    } else {
      res.status(404).json({ error: "Book not found", error });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get all book data", error });
  }
});

async function updateBookTitle(bookTitle, dataToUpdate) {
  try {
    const getBookTitle = await Book.findOneAndUpdate(
      { title: bookTitle },
      dataToUpdate,
      {
        new: true,
      }
    );
    return getBookTitle;
  } catch (error) {
    console.log(error);
  }
}

app.post("/books/update/:bookTitle", async (req, res) => {
  try {
    const updatedBookTitle = await updateBookTitle(
      req.params.bookTitle,
      req.body
    );
    if (updatedBookTitle) {
      res
        .status(200)
        .json({ message: "Book updated successfully", book: updatedBookTitle });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get all book data", error });
  }
});

async function deleteBook(bookId) {
  try {
    const getDeletedBook = await Book.findByIdAndDelete(bookId);
    return getDeletedBook;
  } catch (error) {
    console.log(error);
  }
}

app.delete("/books/delete/:bookId", async (req, res) => {
  try {
    const deletedBook = deleteBook(req.params.bookId);

    res
      .status(200)
      .json({ message: "Book deleted successfully", book: deletedBook });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
