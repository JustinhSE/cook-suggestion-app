const Ingredient = require('../models/Ingredient');
const spoonacularService = require('../services/spoonacularService');

exports.getSuggestions = async (req, res) => {
  try {
    const ingredients = await Ingredient.findByUser(req.user.id);
    const recipes = await spoonacularService.getRecipes(ingredients);
    res.json(recipes);
  } catch (error) {
    console.error('Error getting recipe suggestions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
