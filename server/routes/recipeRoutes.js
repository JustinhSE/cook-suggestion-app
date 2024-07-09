const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/suggestions', recipeController.getSuggestions);

module.exports = router;