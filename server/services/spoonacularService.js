const axios = require('axios');

const spoonacularApiKey = process.env.SPOONACULAR_API_KEY;
const baseURL = 'https://api.spoonacular.com';

const spoonacularApi = axios.create({
  baseURL,
  params: {
    apiKey: spoonacularApiKey,
  },
});

module.exports = {
  async getRecipesByIngredients(ingredients) {
    try {
      const response = await spoonacularApi.get('/recipes/findByIngredients', {
        params: {
          ingredients: ingredients.join(','),
          number: 5,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching recipes from Spoonacular:', error);
      throw error;
    }
  },
};
