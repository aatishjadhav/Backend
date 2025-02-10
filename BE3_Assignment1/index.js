const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const albums = [
  { id: 1, title: "Abbey Road", artist: "The Beatles", year: 1969 },

  {
    id: 2,
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: 1973,
  },

  { id: 3, title: "Thriller", artist: "Michael Jackson", year: 1982 },
];

app.get("/", (req, res) => {
  res.send("Hello, This is Express Assignment Server..");
});

app.post("/albums", (req, res) => {
  const newAlbum = req.body;

  if (!newAlbum.title || !newAlbum.artist || !newAlbum.year) {
    res.status(404).json({ error: "Title, artist and year is required" });
  } else {
    albums.push(newAlbum);
    res
      .status(201)
      .json({ message: "New Album added successfully", album: newAlbum });
  }
});

app.get("/albums", (req, res) => {
  res.send(albums);
});

app.delete("/albums/:id", (req, res) => {
  const albumId = req.params.id;
  const index = albums.findIndex((album) => album.id == albumId);

  if (index === -1) {
    res.status(404).json({ error: "Album not found" });
  } else {
    albums.splice(index, 1);
    res
      .status(200)
      .json({ message: "Album deleted Successfully", album: index });
  }
});

app.post("/albums/:id", (req, res) => {
  const albumId = req.params.id;
  const updateAlbumData = req.body;

  const albumToUpdate = albums.find((album) => album.id == albumId);

  if (!albumToUpdate) {
    res.status(404).json({ error: "Album not found" });
  } else {
    Object.assign(albumToUpdate, updateAlbumData);
    res
      .status(200)
      .json({ message: "Album updated successfully", album: albumToUpdate });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
