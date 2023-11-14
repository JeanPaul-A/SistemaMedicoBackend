import { Router } from 'express'
import patientsRoutes from './patients.routes'
import { loginRouter } from './auth.routes'

const router = Router()

router.use('/login', loginRouter)

router.use('/patients', patientsRoutes)

export default router
