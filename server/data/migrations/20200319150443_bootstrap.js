exports.up = function(knex) {
  return knex.schema
    .createTable("recipe_book", tbl => {
      tbl.increments("id");
      tbl
        .string("name", 255)
        .notNullable()
        .unique();
      tbl.string("description").notNullable();
      tbl.string("serving_size", 30).notNullable();
      tbl
        .integer("cook_time_in_minutes")
        .unsigned()
        .notNullable();
      tbl.string("image").notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments("id");
      tbl
        .string("name")
        .notNullable()
        .unique();
      tbl
        .integer("price_per_pound")
        .unsigned()
        .notNullable();
    })
    .createTable("recipe", tbl => {
      tbl.primary(["ingredient_id", "recipe_id"]);
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingregients")
        .onDelete("Restrict")
        .onUpdate("Cascade");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe_book")
        .onDelete("Restrict")
        .onUpdate("Cascade");
      tbl
        .integer("ingredient_amount")
        .unsigned()
        .notNullable();
      tbl.string("unit_of_measure").notNullable();
    })
    .createTable("steps", tbl => {
      tbl.increments("id");
      tbl
        .integer("recipe_key")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("recipe_book");
      tbl
        .integer("step_number")
        .notNullable()
        .unsigned();
      tbl.string("description").notNullable();
    });
};

exports.down = function(knex) {
  knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipe")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_book");
};
