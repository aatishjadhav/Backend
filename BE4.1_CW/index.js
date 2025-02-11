const express = require("express");
const app = express();
const { initializeDatabase } = require("./db/db.connect");
const Movie = require("./models/movies.models");

app.use(express.json());

initializeDatabase();

const newMovie = {
  title: "New Movie",
  releaseYear: 2023,
  genre: ["Drama"],
  director: "Aditya Roy Kappor",
  actors: ["Shah Rukh Khan", "Kajol"],
  language: "Hindi",
  country: "India",
  rating: 6.1,
  plot: "A young man and woman fall in love on a Australia trip.",
  awards: "IFA Filmfare Awards",
  posterUrl: "https://example.com/new-poster1.jpg",
  trailerUrl: "https://example.com/new-trailer1.mp4",
};

async function createMovie(newMovie) {
  try {
    const movie = new Movie(newMovie);
    const saveMovie = await movie.save();
    console.log("New Movie data:", saveMovie);
  } catch (error) {
    throw error;
  }
}

// createMovie(newMovie);


// find a movie with particular title
async function readMovieByTitle(movieTitle) {
  try {
    const movie = await Movie.findOne({ title: movieTitle });
    return movie;
  } catch (error) {
    throw error;
  }
}

// readMovieByTitle("Lagaan");

app.get("/movies/:title", async (req, res) => {
  try {
    const movie = await readMovieByTitle(req.params.title);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie" });
  }
});

// to get all the movies in the database

async function readAllMovies() {
  try {
    const allMovies = await Movie.find();
    return allMovies;
  } catch (error) {
    console.log(error);
  }
}

// readAllMovies();

app.get("/movies", async (req, res) => {
  try {
    const movies = await readAllMovies();
    if (movies.length !== 0) {
      res.json(movies);
    } else {
      res.status(404).json({ error: "No movies found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

// get movie by director name

async function readMovieByDirector(directorName) {
  try {
    const getDirector = await Movie.find({ director: directorName });
    return getDirector;
  } catch (error) {
    console.log(error);
  }
}

// readMovieByDirector("Rajkumar Hirani");

app.get("/movies/director/:directorName", async (req, res) => {
  try {
    const movies = await readMovieByDirector(req.params.directorName);
    if (movies.length !== 0) {
      res.json(movies);
    } else {
      res.status(404).json({ error: "No movies found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

async function readMovieByGenre(genreName) {
  try {
    const movieByGenre = await Movie.find({ genre: genreName });
    return movieByGenre;
  } catch (error) {
    console.log(error);
  }
}

app.get("/movies/genre/:genreName", async (req, res) => {
  try {
    const movies = await readMovieByGenre(req.params.genreName);
    if (movies.length !== 0) {
      res.json(movies);
    } else {
      res.status(404).json({ error: "No movies found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
