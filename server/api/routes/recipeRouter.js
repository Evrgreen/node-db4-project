const express = require("express");
const Router = express.Router();
const Recipe = require("./recipeModel");

Router.route("/").get(async (req, res) => {
  const recipes = await Recipe.getRecipes();
  res.status(200).json({ recipes });
});
Router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  try {
    const recipe = await Recipe.getRecipeById(id);
    recipe
      ? res.status(200).json(recipe)
      : res.status(400).send("Not able to locate that recipe");
  } catch (error) {
    res.status(500).json({
      message: `There was an error performing that operation ${error}`
    });
  }
});

Router.route("/:id/:query").get(async (req, res) => {
  const id = req.params.id;
  const query = req.params.query;
  try {
    switch (query) {
      case "instructions": {
        const instructions = await Recipe.getInstructions(id);
        instructions.length
          ? resolve(res, instructions)
          : reject(res, "no instructions found for that recipe");
      }
      case "shoppingList": {
        const shoppingList = await Recipe.getShoppingList(id);
        shoppingList.length
          ? resolve(res, shoppingList)
          : reject(res, "Not able to locate that recipe");
      }
      default:
        res.status(404).json({ message: "Page not Found" });
    }
  } catch (error) {
    res.status(500).json({
      message: `There was an error performing that operation ${error}`
    });
  }
});

function resolve(res, data) {
  res.status(200).json(data);
}
function reject(res, message) {
  res.status(400).json({ message });
}
module.exports = Router;
