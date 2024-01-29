import db from '../../config/database.js'

class Author {
  async get() {
    const [rows] = await db.query('SELECT * FROM authors')
    console.log('author.get', rows)

    return rows
  }

  async find(id) {
    const [rows] = await db.query('SELECT * FROM authors WHERE id = ?', [id])
    console.log('author.find', rows)

    if (!rows.length) {
      throw new Error('Author not found')
    }

    return rows[0]
  }
}

export default new Author()
