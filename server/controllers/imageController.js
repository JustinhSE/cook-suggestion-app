const cloudinaryService = require('../services/cloudinaryService');
const visionService = require('../services/visionService');
const Ingredient = require('../models/Ingredient');

exports.uploadAndDetect = async (req, res) => {
  try {
    const imageUrl = await cloudinaryService.uploadImage(req.file.path);
    const ingredients = await visionService.detectIngredients(imageUrl);
    await Ingredient.bulkCreate(ingredients, { userId: req.user.id });
    res.json({ ingredients });
  } catch (error) {
    console.error('Error in upload and detect:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};