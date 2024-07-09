import React, { useState } from 'react';
import api from '../services/api';

function ImageUpload({ onIngredientsDetected }) {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await api.uploadAndDetectIngredients(formData);
      onIngredientsDetected(response.data.ingredients);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload and Detect Ingredients</button>
    </form>
  );
}

export default ImageUpload;