import db from '../../config/database.js'

class Category {
  async get() {
    const [rows] = await db.query('SELECT * FROM categories')

    return rows
  }

  async find(id) {
    const [rows] = await db.query('SELECT * FROM categories WHERE id = ?', [id])

    if (!rows.length) {
      throw new Error('Category not found')
    }

    return rows[0]
  }
}

export default new Category()
