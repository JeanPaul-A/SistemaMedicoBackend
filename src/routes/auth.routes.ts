import { Router } from 'express'
import * as LoginController from '../controllers/auth.controller'

const router = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/', LoginController.loginPatient)

export default router
