import { Router } from 'express'
import { loginPatientC } from '../controllers/auth.controller'

const router = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/', loginPatientC)

export { router as loginRouter }
