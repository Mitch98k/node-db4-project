const express = require('express');
const router = express.Router();
const Recipes = require('./recipe-model');

router.get('/api/recipes/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const recipe = await Recipes.getById(id);
        res.status(200).json(recipe);
    } catch(err) {
        res.status(500).json({ message: "recipe could not be retrieved", error: err.message });
    }
});

module.exports = router;