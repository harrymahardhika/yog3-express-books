import db from '../../config/database.js'

class BaseService {
  async get() {
    const [rows] = await db.query(`SELECT * FROM ${this.tableName}`)

    return rows
  }

  async find(id) {
    const [rows] = await db.query(`SELECT * FROM ${this.tableName} WHERE id = ?`, [id])

    if (!rows.length) {
      throw new Error(`${this.tableName} not found`)
    }

    return rows[0]
  }
}

export default BaseService
