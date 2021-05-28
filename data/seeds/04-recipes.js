
exports.seed = function(knex) {
      return knex('recipes').insert([
        {recipe_id: 1, recipe_name: 'horchata', step_id: 1},
      ]);
};
