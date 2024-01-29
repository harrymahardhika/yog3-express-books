import { Router } from 'express'
import Publisher from '../services/publisher.js'

const router = Router()

router.get('/publishers', async (req, res) => {
  const publishers = await Publisher.get()
  res.json(publishers)
})

router.get('/publishers/:id', async (req, res) => {
  try {
    const publisher = await Publisher.find(req.params.id)
    res.json(publisher)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
})

router.post('/publishers', async (req, res) => {
  res.json({ message: 'hello from publisher routes' })
})

router.put('/publishers/:id', async (req, res) => {
  res.json({ message: 'hello from publisher routes' })
})

router.delete('/publishers/:id', async (req, res) => {
  res.json({ message: 'hello from publisher routes' })
})

export default router
