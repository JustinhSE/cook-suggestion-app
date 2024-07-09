const vision = require('../config/vision');

exports.detectIngredients = async (imageUrl) => {
  try {
    const [result] = await vision.objectLocalization(imageUrl);
    const objects = result.localizedObjectAnnotations;
    return objects.map(obj => obj.name);
  } catch (error) {
    console.error('Error detecting ingredients:', error);
    throw error;
  }
};

const MAX_RETRIES = 3;

exports.detectIngredientsWithRetry = async (imageUrl) => {
  for (let i = 0; i < MAX_RETRIES; i++) {
    try {
      const [result] = await vision.objectLocalization(imageUrl);
      const objects = result.localizedObjectAnnotations;
      return objects.map(obj => obj.name);
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${error.message}`);
      if (i === MAX_RETRIES - 1) throw error;
    }
  }
};