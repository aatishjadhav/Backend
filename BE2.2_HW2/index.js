const { initializeDatabase } = require("./db/db.connect");
const Hotel = require("./models/hotel.models");

initializeDatabase();

const newHotel = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: [
    "Room Service",
    "Horse riding",
    "Boating",
    "Kids Play Area",
    "Bar",
  ],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel2-photo1.jpg",
    "https://example.com/hotel2-photo2.jpg",
  ],
};

const createHotelData = async (newHotel) => {
  try {
    const hotel = new Hotel(newHotel);
    const saveData = await hotel.save();
    console.log("Hotel Data saved successfully", saveData);
  } catch (error) {
    throw error;
  }
};

// createHotelData(newHotel);

async function readAllHotels() {
  try {
    const getAllHotels = await Hotel.find();
    console.log(getAllHotels);
  } catch (error) {
    console.log(error);
  }
}
// readAllHotels();

async function readHotelByName(hotelName) {
  try {
    const getHotelByName = await Hotel.find({ name: hotelName });
    console.log(getHotelByName);
  } catch (error) {
    console.log(error);
  }
}

// readHotelByName("Lake View");

async function readHotelByParking(parking) {
  try {
    const getHotelByParking = await Hotel.find({ isParkingAvailable: parking });
    console.log(getHotelByParking);
  } catch (error) {
    console.log(error);
  }
}

// readHotelByParking(true);

async function readRestaurantAvailability(restaurant) {
  try {
    const getRestoAvailable = await Hotel.find({
      isRestaurantAvailable: restaurant,
    });
    console.log(getRestoAvailable);
  } catch (error) {
    console.log(error);
  }
}

// readRestaurantAvailability(true);

async function readHotelCategory(category) {
  try {
    const getByCategory = await Hotel.find({ category: category });
    console.log(getByCategory);
  } catch (error) {
    console.log(error);
  }
}

// readHotelCategory("Mid-Range");

async function readHotelByPrice(price) {
  try {
    const getHotelByPrice = await Hotel.find({ priceRange: price });
    console.log(getHotelByPrice);
  } catch (error) {
    console.log(error);
  }
}

// readHotelByPrice("$$$$ (61+)");

async function readHotelsByRating(rating) {
  try {
    const getHotelRating = await Hotel.findOne({ rating: rating });
    console.log(getHotelRating);
  } catch (error) {
    console.log(error);
  }
}

// readHotelsByRating(4.0);

async function readHotelsByPhoneNumber(phone) {
  try {
    const getHotelByPhone = await Hotel.find({ phoneNumber: phone });
    console.log(getHotelByPhone);
  } catch (error) {
    console.log(error);
  }
}

readHotelsByPhoneNumber("+1299655890");
