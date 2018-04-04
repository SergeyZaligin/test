import { Router } from 'express'

import users from './users'
import vacations from './vacations'
const router = Router()

// Add USERS Routes
router.use(users)
router.use(vacations)

export default router
