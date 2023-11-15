/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import * as PatientController from '../controllers/patients.controller'
import { createPatientValidator, updatePatientValidator } from '../middleware/validators/patients.validators'
import validateResult from '../helpers/result.handler'
import dniValidator from '../middleware/validators/general.validator'

const router = Router()

router.get('/', PatientController.getPatients)

router.get('/:dni', PatientController.getPatientByDni)

router.post('/', createPatientValidator, validateResult, PatientController.postPatient)

router.put('/:dni', dniValidator, updatePatientValidator, validateResult, PatientController.putPatient)

router.delete('/:dni', dniValidator, validateResult, PatientController.deletePatient)

export default router
