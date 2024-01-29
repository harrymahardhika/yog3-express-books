import { Router } from 'express'

const router = Router()

router.get('/publishers', async (req, res) => {
  res.json({ message: 'hello from publisher routes' })
})

router.get('/publishers/:id', async (req, res) => {
  res.json({ message: 'hello from publisher routes' })
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
