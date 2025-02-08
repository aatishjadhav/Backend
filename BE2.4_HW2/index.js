const { initializeDatabase } = require("./db/db.connect");
const Hotel = require("./models/hotel.models");

initializeDatabase();

const newHotel = {
  name: "Monnset Resort1",
  category: "Resort",
  location: "15 Main Road, Anytown",
  rating: 4.2,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1997687392",
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

// readHotelsByPhoneNumber("+1299655890");

async function updateHotelById(hotelId, dataToUpdate) {
  try {
    const getHotelById = await Hotel.findByIdAndUpdate(hotelId, dataToUpdate, {
      new: true,
    });
    console.log(getHotelById);
  } catch (error) {
    console.log(error);
  }
}

// updateHotelById("67a5a33cd6e8f0b4ee45ce26", { checkOutTime: "11:00 AM" });

async function updateHotelByName(hotelName, dataToUpdate) {
  try {
    const getHotelbyName = await Hotel.findOneAndUpdate(
      { name: hotelName },
      dataToUpdate,
      { new: true }
    );
    console.log(getHotelbyName);
  } catch (error) {
    console.log(error);
  }
}

// updateHotelByName("Sunset Resort", { rating: 4.2 });

async function updateHotelByPhone(phone, dataToUpdate) {
  try {
    const getHotelsByPhone = await Hotel.findOneAndUpdate(
      { phoneNumber: phone },
      dataToUpdate,
      { new: true }
    );
    console.log(getHotelsByPhone);
  } catch (error) {
    console.log(error);
  }
}

// updateHotelByPhone("+1299655890", { phoneNumber: "+1997687392" });

async function deleteHotelById(restoId) {
  try {
    const deletedHotelById = await Hotel.findByIdAndDelete(restoId);
    console.log(deletedHotelById);
  } catch (error) {
    console.log("Error in deleting restaurant", error);
  }
}

// deleteHotelById("67a4f85f894223ec1923c58b");

async function deleteHotelByPhoneNumber(phone) {
  try {
    const deleteHotelByPhone = await Hotel.findOneAndDelete({
      phoneNumber: phone,
    });
    console.log("This hotel is deleted", deleteHotelByPhone);
  } catch (error) {
    console.log("Error in deleting hotels data", error);
  }
}

// deleteHotelByPhoneNumber("+1997687392");
