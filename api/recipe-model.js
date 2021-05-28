const db = require('../db-config');

function getById(recipe_id) {
    return db('recipes').select('steps.*', 'ingredients.*', 'quantities.*').join('steps', 'steps.step_id', '=', 'recipes.step_id').join('ingredients', 'ingredients.ingredient_id', '=', 'steps.ingredient_id').join('quantities', 'quantities.quantity_id', '=', 'ingredients.quantity_id').where({recipe_id});
}

module.exports = {
    getById
}