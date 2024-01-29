import { Router } from 'express'

const router = Router()

router.get('/categories', async (req, res) => {
  res.json({ message: 'hello from category routes' })
})

router.get('/categories/:id', async (req, res) => {
  res.json({ message: 'hello from category routes' })
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
