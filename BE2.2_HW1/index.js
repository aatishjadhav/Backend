const { initializeDatabase } = require("./db/db.connect");
const Restaurant = require("./models/restaurants.models");

initializeDatabase();

const newRestaurant = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: [
    "https://example.com/yo-photo1.jpg",
    "https://example.com/yo-photo2.jpg",
    "https://example.com/yo-photo3.jpg",
  ],
};

async function createRestaurant(newRestaurant) {
  try {
    const restaurant = new Restaurant(newRestaurant);
    const resto = await restaurant.save();
    console.log("Restaurant data saved successfully", resto);
  } catch (error) {
    throw error;
  }
}

// createRestaurant(newRestaurant);

async function readAllRestaurants() {
  try {
    const getAllRestos = await Restaurant.find();
    console.log(getAllRestos);
  } catch (error) {
    console.log(error);
  }
}

// readAllRestaurants();

async function readRestaurantByName(restoName) {
  try {
    const getRestoName = await Restaurant.findOne({ name: restoName });
    console.log(getRestoName);
  } catch (error) {
    console.log(error);
  }
}

// readRestaurantByName("Somi");

async function readRestaurantReservation(reservation) {
  try {
    const getReservedResto = await Restaurant.find({
      reservationsNeeded: reservation,
    });
    console.log(getReservedResto);
  } catch (error) {
    console.log(error);
  }
}

// readRestaurantReservation(true);

async function readRestaurantByDelivery(delivery) {
  try {
    const getRestoDelivery = await Restaurant.find({
      isDeliveryAvailable: delivery,
    });
    console.log(getRestoDelivery);
  } catch (error) {
    console.log(error);
  }
}

readRestaurantByDelivery(true);

async function readRestaurantByPhone(phone) {
  try {
    const getRestoByPhone = await Restaurant.find({ phoneNumber: phone });
    console.log(getRestoByPhone);
  } catch (error) {
    console.log(error);
  }
}

// readRestaurantByPhone("+1288997392");

async function readRestaurantByCuisine(cuisine) {
  try {
    const getRestoByCuisine = await Restaurant.find({ cuisine: cuisine });
    console.log(getRestoByCuisine);
  } catch (error) {
    console.log(error);
  }
}

// readRestaurantByCuisine("Italian");
