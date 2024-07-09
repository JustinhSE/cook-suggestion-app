import React, { useEffect, useState } from 'react';
import api from '../services/api';

function RecipeList({ ingredients }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await api.getRecipesByIngredients(ingredients);
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    if (ingredients.length > 0) {
      fetchRecipes();
    }
  }, [ingredients]);

  return (
    <div>
      <h2>Suggested Recipes:</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
