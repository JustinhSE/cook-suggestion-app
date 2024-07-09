import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import IngredientList from './components/IngredientList';
import RecipeList from './components/RecipeList';

function App() {
  const [ingredients, setIngredients] = useState([]);

  return (
    <div className="App">
      <h1>Recipe Suggestion App</h1>
      <ImageUpload onIngredientsDetected={setIngredients} />
      <IngredientList ingredients={ingredients} />
      <RecipeList ingredients={ingredients} />
    </div>
  );
}

export default App;