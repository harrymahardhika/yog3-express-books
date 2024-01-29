import { Router } from 'express'
import Author from '../services/author.js'

const router = Router()

router.get('/authors', async (req, res) => {
  const authors = await Author.get()
  res.json(authors)
})

router.get('/authors/:id', async (req, res) => {
  try {
    const author = await Author.find(req.params.id)
    res.json(author)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
})

router.post('/authors', async (req, res) => {
  res.json({ message: 'hello from author routes' })
})

router.put('/authors/:id', async (req, res) => {
  res.json({ message: 'hello from author routes' })
})

router.delete('/authors/:id', async (req, res) => {
  res.json({ message: 'hello from author routes' })
})

export default router
