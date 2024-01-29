import db from '../../config/database.js'

class Book {
  async get() {
    const [rows] = await db.query('SELECT * FROM books')

    return rows
  }

  async find(id) {
    const [rows] = await db.query('SELECT * FROM books WHERE id = ?', [id])

    if (!rows.length) {
      throw new Error('Book not found')
    }

    return rows[0]
  }
}

export default new Book()
