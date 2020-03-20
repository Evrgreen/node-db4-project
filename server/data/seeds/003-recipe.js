exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe").insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          ingredient_amount: 1.5,
          unit_of_measure: "pounds"
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          ingredient_amount: 1,
          unit_of_measure: "cup"
        },
        {
          recipe_id: 1,
          ingredient_id: 4,
          ingredient_amount: 1,
          unit_of_measure: "whole onion, chopped"
        },
        {
          recipe_id: 1,
          ingredient_id: 6,
          ingredient_amount: 1,
          unit_of_measure: "egg"
        }
      ]);
    });
};
