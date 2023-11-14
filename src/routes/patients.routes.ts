/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { deleteObject, getObjects, postObject, putObject } from '../controllers/patients.controller'
import { createPatientValidator, updatePatientValidator } from '../middleware/validators/patients.validators'
import validateResult from '../helpers/validateResult'
import idValidator from '../middleware/validators/general.validator'

const router = Router()

router.get('/', getObjects)

router.post('/', createPatientValidator, validateResult, postObject)

router.put('/:id', idValidator, updatePatientValidator, validateResult, putObject)

router.delete('/:id', idValidator, validateResult, deleteObject)

export default router
