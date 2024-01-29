import { Router } from 'express'
import Category from '../services/category.js'

const router = Router()

router.get('/categories', async (req, res) => {
  const categories = await Category.get()
  res.json(categories)
})

router.get('/categories/:id', async (req, res) => {
  try {
    const category = await Category.find(req.params.id)
    res.json(category)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
})

router.post('/categories', async (req, res) => {
  res.json({ message: 'hello from category routes' })
})

router.put('/categories/:id', async (req, res) => {
  res.json({ message: 'hello from category routes' })
})

router.delete('/categories/:id', async (req, res) => {
  res.json({ message: 'hello from category routes' })
})

export default router
