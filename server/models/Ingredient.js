const pool = require('../config/database');

module.exports = {
  async create(name) {
    const result = await pool.query(
      'INSERT INTO ingredients (name) VALUES ($1) RETURNING *',
      [name]
    );
    return result.rows[0];
  },

  async findByUser(userId) {
    const result = await pool.query(
      'SELECT i.name FROM ingredients i JOIN user_ingredients ui ON i.id = ui.ingredient_id WHERE ui.user_id = $1',
      [userId]
    );
    return result.rows.map(row => row.name);
  },

  async addToUser(userId, ingredientId) {
    await pool.query(
      'INSERT INTO user_ingredients (user_id, ingredient_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
      [userId, ingredientId]
    );
  }
};
