import BaseService from './base-service.js'

class Author extends BaseService {
  tableName = 'authors'
}

export default new Author()
