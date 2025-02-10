const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const cars = [{ id: 1, make: "Toyota", model: "Camry", year: 2022 }];

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.post("/cars", (req, res) => {
  const newCar = req.body;

  if (!newCar.make || !newCar.model || !newCar.year) {
    res.status(400).json({ error: "make, model and year are required" });
  } else {
    cars.push(newCar);
    res.status(201).json({ message: "Car added successfully", car: newCar });
  }
});

app.get("/cars", (req, res) => {
  res.send(cars);
});

app.delete("/cars/:id", (req, res) => {
  const carId = req.params.id;

  const index = cars.findIndex((car) => car.id == carId);

  if (index === -1) {
    res.status(404).json({ error: "Car not found" });
  } else {
    cars.splice(index, 1);
    res.status(200).json({ message: "Car deleted successfully" });
  }
});

app.post("/cars/:id", (req, res) => {
  const carId = parseInt(req.params.id);
  const updateCarData = req.body;

  const carToUpdate = cars.find((car) => car.id === carId);

  if (!carToUpdate) {
    res.status(404).json({ error: "Car not found" });
  } else {
    if (!updateCarData.make || !updateCarData.model || !updateCarData.year) {
      res.status(400).json({ error: "Make, model and year are required" });
    } else {
      Object.assign(carToUpdate, updateCarData);
      res
        .status(200)
        .json({ message: "Car data updated successfully", car: carToUpdate });
    }
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
