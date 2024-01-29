import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  res.json({ message: 'hello from books routes' })
})

router.get('/:id', async (req, res) => {
  res.json({ message: 'hello from books routes' })
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
