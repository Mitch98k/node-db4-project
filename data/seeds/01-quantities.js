
exports.seed = function(knex) {
      return knex('quantities').insert([
        {quantity_id: 1, quantity: '3.5', unit: 'tbls'},
        {quantity_id: 2, quantity: '1.5', unit: 'cups'},
      ]);
};
