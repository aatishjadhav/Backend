const { setupDB } = require("./db/db.connect");
const Car = require("./models/car.models");
const fs = require("fs");

setupDB();

const jsonData = fs.readFileSync("cars.json", "utf-8");
const carsData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const carData of carsData) {
      const newCar = new Car({
        brand: carData.brand,
        model: carData.model,
        year: carData.year,
        bodyStyle: carData.bodyStyle,
        fuelType: carData.fuelType,
        transmission: carData.transmission,
        engine: carData.engine,
        mileage: carData.mileage,
        color: carData.color,
        price: carData.price,
        condition: carData.condition,
        description: carData.description,
        photos: carData.photos,
        inMarket: carData.inMarket,
      });
        newCar.save();
    }
  } catch (error) {
    console.log("Error while seeding data in databse");
  }
}

seedData();
