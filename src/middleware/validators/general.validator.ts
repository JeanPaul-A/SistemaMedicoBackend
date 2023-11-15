import { param } from 'express-validator'

const dniValidator = [
  param('dni').not().isEmpty().withMessage('El dni es requerido'),
  param('dni').isNumeric().withMessage('Dni inválido')
]

export default dniValidator
