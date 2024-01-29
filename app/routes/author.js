import { Router } from 'express'

const router = Router()

router.get('/authors', async (req, res) => {
  res.json({ message: 'hello from author routes' })
})

router.get('/authors/:id', async (req, res) => {
  res.json({ message: 'hello from author routes' })
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
