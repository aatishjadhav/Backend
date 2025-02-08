const { setupDB } = require("./db/db.connect");
const Car = require("./models/car.models");

setupDB();

const carData = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg",
  ],
};

async function createCarData(carData) {
  try {
    const addCarData = new Car(carData);
    const saveCarRecords = await addCarData.save();
    console.log("Car Data saved successfully", saveCarRecords);
  } catch (error) {
    console.log("Error in creating car data.", error);
  }
}

// createCarData(carData);

async function readAllCarsData() {
  try {
    const getAllCars = await Car.find();
    console.log(getAllCars);
  } catch (error) {
    console.log("Error  in fetching all cars data", error);
  }
}

// readAllCarsData();

async function readCarbyBrand(brand) {
  try {
    const getCarBrand = await Car.findOne({ brand: brand });
    console.log("This is fetched car brand", getCarBrand);
  } catch (error) {
    console.log("Error in fetching cars by its brand", error);
  }
}

// readCarbyBrand("Ford");

async function readCarbyColor(color) {
  try {
    const getCarByColor = await Car.find({ color: color });
    console.log(getCarByColor);
  } catch (error) {
    console.log("Error in fetching car by color", error);
  }
}

// readCarbyColor("Black");

async function updateCarPrice(modelName, dataToUpdate) {
  try {
    const updatedCarPrice = await Car.findOneAndUpdate(
      { model: modelName },
      dataToUpdate,
      { new: true }
    );
    console.log(updatedCarPrice);
  } catch (error) {
    console.log("Error in updating cars price", error);
  }
}

// updateCarPrice("Corolla", { price: 2300000 });

async function updateCarCondition(modelName, dataToUpdate) {
  try {
    const updatedCarCondition = await Car.findOneAndUpdate(
      { model: modelName },
      dataToUpdate,
      { new: true }
    );
    console.log(updatedCarCondition);
  } catch (error) {
    console.log("Error in updating cars condition", error);
  }
}

// updateCarCondition("Model S", { condition: "Used" });

async function deleteCarById(carId) {
  try {
    const deletedCar = await Car.findByIdAndDelete(carId);
    console.log("This is deleted car", deletedCar);
  } catch (error) {
    console.log("Error in deleting car using id", error);
  }
}

// deleteCarById("67a499737dd5dbd95d6b5d0a");

async function deleteCarByStyle(bodyStyle) {
  try {
    const deletedCarsStyle = await Car.findOneAndDelete({
      bodyStyle: bodyStyle,
    });
    console.log(deletedCarsStyle);
  } catch (error) {
    console.log("Error in deleting csr by its style", error);
  }
}
// deleteCarByStyle("Coupe");
