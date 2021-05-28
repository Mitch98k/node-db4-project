
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'cinnimon', quantity_id: 1},
        {ingredient_id: 2, ingredient_name: 'milk', quantity_id: 2},
      ]);
};
