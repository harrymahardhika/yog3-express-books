import BaseService from './base-service.js'

class Book extends BaseService {
  tableName = 'books'
}

export default new Book()
