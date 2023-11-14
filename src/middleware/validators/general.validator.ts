import { header } from 'express-validator'

const idValidator = [
  header('id').not().isEmpty().withMessage('El id es requerido'),
  header('id').isNumeric().withMessage('Id inválido')
]

export default idValidator
