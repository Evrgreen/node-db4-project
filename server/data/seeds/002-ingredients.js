exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Ground Hambuger", price_per_pound: 3.0 },
        { name: "Butter", price_per_pound: 3.75 },
        { name: "Bread Crumbs", price_per_pound: 1.25 },
        { name: "Onion", price_per_pound: 1.0 },
        { name: "Celery", price_per_pound: 0.6 },
        { name: "Egg", price_per_pound: 1.5 },
        { name: "Dry Macaroni", price_per_pound: 1.75 },
        { name: "Cheddar Cheese", price_per_pound: 4.0 },
        { name: "T-bone Steak", price_per_pound: 23.0 },
        { name: "Whole Chicken", price_per_pound: 3.5 },
        { name: "Pepper", price_per_pound: 5.0 }
      ]);
    });
};
