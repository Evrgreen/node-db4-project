const db = require("../../data/dbconfig");

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions
};

async function getRecipes() {
  return await db("recipe_book");
}
async function getRecipeById(id) {
  const [recipe] = await db("recipe_book").where({ id });
  return recipe;
}
async function getShoppingList(id) {
  return await db("recipe as r")
    .join("ingredients as i", "i.id", "r.ingredient_id")
    .select(
      "i.name",
      "r.ingredient_amount as Amount",
      "r.unit_of_measure as Unit of Measure"
    )
    .where({ "r.recipe_id": id });
}
async function getInstructions(id) {
  return await db("steps")
    .where({ recipe_key: id })
    .orderBy("step_number");
}
