
exports.up = function(knex) {
  return knex.schema
    .createTable('quantities', tbl => {
      tbl.increments('quantity_id');
      tbl.decimal('quantity').notNullable();
      tbl.string('unit').notNullable();
  })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');
        tbl.string('ingredient_name').notNullable().unique();
        tbl.integer('quantity_id')
            .unsigned()
            .notNullable()
            .references('quantity_id')
            .inTable('quantities')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
      .createTable('steps', tbl => {
          tbl.increments('step_id');
          tbl.integer('step_number').notNullable();
          tbl.string('step_instructions').notNullable();
          tbl.integer('ingredient_id')
              .unsigned()
              .notNullable()
              .references('ingredient_id')
              .inTable('ingredients')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
      })
        .createTable('recipes', tbl => {
            tbl.increments('recipe_id');
            tbl.string('recipe_name').notNullable().unique();
            tbl.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onDelete('CASCADE')
                .onUpdate('CASCADE'); 
        });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('quantities');
};
