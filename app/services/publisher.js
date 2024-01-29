import db from '../../config/database.js'

class Publisher {
  async get() {
    const [rows] = await db.query('SELECT * FROM publishers')

    return rows
  }

  async find(id) {
    const [rows] = await db.query('SELECT * FROM publishers WHERE id = ?', [id])

    if (!rows.length) {
      throw new Error('Publisher not found')
    }

    return rows[0]
  }
}

export default new Publisher()
