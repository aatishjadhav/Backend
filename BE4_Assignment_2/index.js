const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const { initializeDB } = require("./db/db.connect");
const Recipe = require("./models/recipe.models");

initializeDB();

const PORT = process.env.PORT;

async function createRecipe(recipes) {
  try {
    const addRecipe = new Recipe(recipes);
    const saveRecipe = await addRecipe.save();
    return saveRecipe;
  } catch (error) {
    console.log(error);
  }
}

app.post("/recipes", async (req, res) => {
  try {
    const updatedRecipe = await createRecipe(req.body);
    if (updatedRecipe) {
      res.status(201).json({
        message: "New recipe added successfully",
        recipe: updatedRecipe,
      });
    } else {
      res.status(404).json({ error: "Failed to add recipe" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to add recipes" });
  }
});

async function readAllRecipes() {
  try {
    const getAllRecipe = await Recipe.find();
    return getAllRecipe;
  } catch (error) {
    console.log(error);
  }
}

app.get("/recipes", async (req, res) => {
  try {
    const getRecipes = await readAllRecipes();
    if (getRecipes) {
      res
        .status(200)
        .json({ message: "Recipes fetched successfully", recipe: getRecipes });
    } else {
      res.status(404).json({ error: "Recipes not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

async function getRecipeByTitle(title) {
  try {
    const getRecipe = await Recipe.findOne({ title: title });
    return getRecipe;
  } catch (error) {
    console.log(error);
  }
}

app.get("/recipe/:recipeTitle", async (req, res) => {
  try {
    const findRecipe = await getRecipeByTitle(req.params.recipeTitle);
    if (findRecipe) {
      res.status(200).json({
        message: "Recipe fetched successfully using title",
        recipe: findRecipe,
      });
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

async function getRecipeByAuthor(author) {
  try {
    const getRecipe = await Recipe.find({ author: author });
    return getRecipe;
  } catch (error) {
    console.log(error);
  }
}

app.get("/recipe/directory/:authorName", async (req, res) => {
  try {
    const findRecipes = await getRecipeByAuthor(req.params.authorName);
    if (findRecipes) {
      res.status(200).json({
        message: "Recipe fetched successfully using author name",
        recipe: findRecipes,
      });
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

app.get("/recipe/level/easy", async (req, res) => {
  try {
    const findRecipe = await Recipe.find({ difficulty: "Easy" });
    if (findRecipe.length > 0) {
      res.status(200).json({
        message: "Recipe fetched successfully using difficulty level",
        recipe: findRecipe,
      });
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

app.post("/recipe/update/:recipeId", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.recipeId,
      req.body,
      { new: true }
    );
    if (updatedRecipe) {
      res.status(200).json({
        message: "Recipe updated successfully",
        recipe: updatedRecipe,
      });
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

app.delete("/recipe/directory/:recipeId", async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(
      req.params.recipeId,
      req.body,
      { new: true }
    );
    if (deletedRecipe) {
      res
        .status(200)
        .json({
          message: "Recipe deleted successfully",
          recipe: deletedRecipe,
        });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
