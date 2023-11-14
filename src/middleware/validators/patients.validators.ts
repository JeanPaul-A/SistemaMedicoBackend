import { body } from 'express-validator'

export const createPatientValidator = [
  body('name').not().isEmpty().withMessage('El nombre es requerido'),
  body('name').isString().withMessage('El nombre debe ser un texto'),
  body('surname').not().isEmpty().withMessage('El apellido es requerido'),
  body('surname').isString().withMessage('El apellido es debe ser un texto'),
  body('email').not().isEmpty().withMessage('El correo es requerido'),
  body('email').isEmail().withMessage('Escriba un correo válido'),
  body('phone').not().isEmpty().withMessage('El teléfono es requerido'),
  body('phone').isNumeric().withMessage('El teléfono debe ser un número'),
  body('phone').isLength({
    min: 9,
    max: 9
  }).withMessage('El teléfono debe tener 9 dígitos')
]

export const updatePatientValidator = [
  body('email').not().isEmpty().withMessage('El correo es requerido'),
  body('email').isEmail().withMessage('Escriba un correo válido'),
  body('phone').not().isEmpty().withMessage('El teléfono es requerido'),
  body('phone').isNumeric().withMessage('El teléfono debe ser un número'),
  body('phone').isLength({
    min: 9,
    max: 9
  }).withMessage('El teléfono debe tener 9 dígitos')
]
