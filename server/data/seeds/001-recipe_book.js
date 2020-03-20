exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_book")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_book").insert([
        {
          name: "Meatloaf",
          description: "A delicious Keto Meatloaf",
          serving_size: "5-8",
          cook_time_in_minutes: "90",
          image: "http://www.cookingLife.com/meatloaf"
        },
        {
          name: "T-bone steak",
          description: "Juicy Steak made the way you want it ",
          serving_size: "2",
          cook_time_in_minutes: "25",
          image: "http://www.cookingLife.com/steak"
        },
        {
          name: "Mac & Cheese",
          description: "a quick and easy, yet still yummy, staple",
          serving_size: "2-3",
          cook_time_in_minutes: "13",
          image: "http://www.cookingLife.com/macandcheese"
        },
        {
          name: "Roast Chicken",
          description: "The perfect recipe for poultry lovers everywhere",
          serving_size: "4-5",
          cook_time_in_minutes: "65",
          image: "http://www.cookingLife.com/roastchicken"
        }
      ]);
    });
};
