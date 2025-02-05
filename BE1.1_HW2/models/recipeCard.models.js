const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  recipeImgUrl: String,
  servingCount: Number,
  preppingTime: String,
  cookTime: String,
  ingredients: [
    {
      type: String,
    },
  ],
  directions: [
    {
      type: String,
    },
  ],
  notes: {
    type: String,
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
