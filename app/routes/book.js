import { Router } from 'express'
import Book from '../services/book.js'

const router = Router()

router.get('/', async (req, res) => {
  const books = await Book.get()
  res.json(books)
})

router.get('/:id', async (req, res) => {
  try {
    const book = await Book.find(req.params.id)
    res.json(book)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
  res.json({ message: 'hello from books routes' })
})

router.put('/:id', async (req, res) => {
  res.json({ message: 'hello from books routes' })
})

router.delete('/:id', async (req, res) => {
  res.json({ message: 'hello from books routes' })
})

export default router
