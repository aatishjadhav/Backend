const express = require("express");
const { initializeDatabase } = require("./db/db.connect");
const Restaurant = require("./models/restaurants.models");

const app = express();
app.use(express.json());

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
    return getAllRestos;
  } catch (error) {
    console.log(error);
  }
}

// readAllRestaurants();

app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await readAllRestaurants();
    if (restaurants) {
      res.json(restaurants);
    } else {
      res.status(404).json({ error: "Movies not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

async function readRestaurantByName(restoName) {
  try {
    const getRestoName = await Restaurant.findOne({ name: restoName });
    return getRestoName;
  } catch (error) {
    console.log(error);
  }
}

// readRestaurantByName("Somi");

app.get("/restaurants/:restaurantName", async (req, res) => {
  try {
    const restaurants = await readRestaurantByName(req.params.restaurantName);
    if (restaurants.length !== 0) {
      res.json(restaurants);
    } else {
      res.status(404).json({ error: "Restaurant not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

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

// readRestaurantByDelivery(true);

async function readRestaurantByPhone(phone) {
  try {
    const getRestoByPhone = await Restaurant.find({ phoneNumber: phone });
    return getRestoByPhone;
  } catch (error) {
    console.log(error);
  }
}

// readRestaurantByPhone("+1288997392");

app.get("/restaurants/directory/:phoneNumber", async (req, res) => {
  try {
    const restaurants = await readRestaurantByPhone(req.params.phoneNumber);
    if (restaurants.length !== 0) {
      res.json(restaurants);
    } else {
      res.status(404).json({ error: "Restaurant not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

async function readRestaurantByCuisine(cuisine) {
  try {
    const getRestoByCuisine = await Restaurant.find({ cuisine: cuisine });
    return getRestoByCuisine;
  } catch (error) {
    console.log(error);
  }
}

// readRestaurantByCuisine("Italian");

app.get("/restaurants/cuisine/:cuisineName", async (req, res) => {
  try {
    const restaurants = await readRestaurantByCuisine(req.params.cuisineName);
    if (restaurants.length !== 0) {
      res.json(restaurants);
    } else {
      res.status(404).json({ error: "Restaurant not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

async function readRestaurantByLocation(location) {
  try {
    const getRestoByLocation = await Restaurant.find({ location: location });
    return getRestoByLocation;
  } catch (error) {
    console.log(error);
  }
}

app.get("/restaurants/location/:restaurantLocation", async (req, res) => {
  try {
    const restaurant = await readRestaurantByLocation(
      req.params.restaurantLocation
    );
    if (restaurant.length !== 0) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

async function updateRestaurant(restoId, dataToUpdate) {
  try {
    const updateRestoById = await Restaurant.findByIdAndUpdate(
      restoId,
      dataToUpdate,
      { new: true }
    );
    console.log(updateRestoById);
  } catch (error) {
    console.log(error);
  }
}
// updateRestaurant("67a59a15ba6f5af108d99f17", { rating: 4.1 });

async function updateByName(name, dataToUpdate) {
  try {
    const updateResstoName = await Restaurant.findOneAndUpdate(
      { name: name },
      dataToUpdate,
      { new: true }
    );
    console.log(updateResstoName);
  } catch (error) {
    console.log(error);
  }
}
// updateByName("Somi", { name: "Som Sarovar" });

async function updateByPhone(phone, dataToUpdate) {
  try {
    const getRestoByPhone = await Restaurant.findOneAndUpdate(
      { phoneNumber: phone },
      dataToUpdate,
      { new: true }
    );
    console.log(getRestoByPhone);
  } catch (error) {
    console.log(error);
  }
}

// updateByPhone("+1288997392", { isDeliveryAvailable: true });

async function deleteRestaurantById(restoId) {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(restoId);
    console.log("This restaurant is deleted", deletedRestaurant);
  } catch (error) {
    console.log("Error in deleting restaurant data", error);
  }
}

// deleteRestaurantById("67a4f2877f431b5ed5816a90");

async function deleteRestaurantByName(restoName) {
  try {
    const deleteRestoByName = await Restaurant.findOneAndDelete({
      name: restoName,
    });
    console.log(deleteRestoByName);
  } catch (error) {
    console.log("Error in deleting restaurant data", error);
  }
}

// deleteRestaurantByName("Cha Cha");

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log("Server running on port", PORT);
});
