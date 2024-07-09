import React from 'react';

function IngredientList({ ingredients }) {
  return (
    <div>
      <h2>Detected Ingredients:</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;