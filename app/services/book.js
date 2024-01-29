import BaseService from './base-service.js'
import db from '../../config/database.js'

class Book extends BaseService {
  async get() {
    const query = `SELECT books.*, authors.name as author_name FROM ${this.tableName}
    join authors on authors.id = books.author_id`

    const [rows] = await db.query(query)

    return rows
  }
}

export default new Book('books')
