
exports.seed = function(knex) {
      return knex('steps').insert([
        {step_id: 1, step_number: 1, step_instructions: "whisk milk and cinnamon", ingredient_id: 1},
        {step_id: 2, step_number: 1, step_instructions: "whisk milk and cinnamon", ingredient_id: 2},
      ]);
};
