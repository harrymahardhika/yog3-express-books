import { Router } from 'express'
import authorRoutes from './routes/author.js'
import categoryRoutes from './routes/category.js'
import bookRoutes from './routes/book.js'
import publisherRoutes from './routes/publisher.js'

const router = Router()

router.use(authorRoutes)
router.use('/books', bookRoutes)
router.use(categoryRoutes)
router.use(publisherRoutes)

export default router
