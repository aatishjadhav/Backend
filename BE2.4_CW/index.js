const { initializeDatabase } = require("./db/db.connect");
const Movie = require("./models/movies.models");

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
    console.log(movie);
  } catch (error) {
    throw error;
  }
}

// readMovieByTitle("Lagaan");

// to get all the movies in the database

async function readAllMovies() {
  try {
    const allMovies = await Movie.find();
    console.log(allMovies);
  } catch (error) {
    console.log(error);
  }
}

// readAllMovies();

// get movie by director name

async function readMovieByDirector(directorName) {
  try {
    const getDirector = await Movie.find({ director: directorName });
    console.log(getDirector);
  } catch (error) {
    console.log(error);
  }
}

// readMovieByDirector("Rajkumar Hirani");

async function updateMovie(movieId, dataToUpdate) {
  try {
    const updateMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {
      new: true,
    });
    console.log(updateMovie);
  } catch (error) {
    console.log("Error in updating Movie rating", error);
  }
}

// updateMovie("67a34132cdb267ce53fbec59", { rating: 8.0 });

// find one data and update its value

async function updateMovieDetail(movieTitle, dataToUpdate) {
  try {
    const updatedMovie = await Movie.findOneAndUpdate(
      { title: movieTitle },
      dataToUpdate,
      { new: true }
    );
    console.log(updatedMovie);
  } catch (error) {
    console.log("error in changing data", data);
  }
}

// updateMovieDetail("Kabhi Khushi Kabhie Gham", { releaseYear: 2002 });

// find a movie by id and delete from the database

async function deleteMovie(movieId) {
  try {
    const deleteMovieId = await Movie.findByIdAndDelete(movieId);
  } catch (error) {
    console.log("Error in deleting movie", error);
  }
}

// deleteMovie("67a4e3a996b571b554ec35d3");

async function deleteByTitle(movieTitle) {
  try {
    const deletedMovieTitle = await Movie.findOneAndDelete({
      title: movieTitle,
    });
    console.log("This movie is deleted:", deletedMovieTitle);
  } catch (error) {
    console.log("Error in movie deletion", error);
  }
}

deleteByTitle("3 Idiots");
