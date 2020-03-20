exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          recipe_key: 1,
          step_number: 1,
          description: "Preheat oven to 350 degrees F"
        },
        {
          recipe_key: 1,
          step_number: 2,
          description:
            "In a large bowl combine the beef, egg,onion, and bread crumbs. Season to taste."
        },
        {
          recipe_key: 1,
          step_number: 3,
          description: "Place Mixture in a lightly Greased 5x9 inch loaf pan"
        },
        {
          recipe_key: 1,
          step_number: 4,
          description: "Place in oven and bake at 250 degrees for 1 hour"
        }
      ]);
    });
};
