import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api',
});

export default {
  uploadAndDetectIngredients: (formData) => api.post('/upload', formData),
  getRecipesByIngredients: (ingredients) => api.get('/recipes', { params: { ingredients } }),
};