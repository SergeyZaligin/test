import { Router } from 'express'

const router = Router()

// Mock Users
const vacations = [
  { name: 'Vacat1' },
  { name: 'Vacat2' },
  { name: 'Vacat3' },
]

/* GET vacations listing. */
router.get('/vacations', function (req, res, next) {
  res.json(vacations)
})

/* GET user by ID. */
router.get('/vacations/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < vacations.length) {
    res.json(vacations[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
