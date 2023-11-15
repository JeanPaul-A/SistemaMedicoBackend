import { validationResult } from 'express-validator'
import { Request, Response } from 'express'

const validateResult: any = (req: Request, res: Response, next: any) => {
  const errores = validationResult(req)
  if (!errores.isEmpty()) {
    return res.status(400).json({ message: errores.array() })
  }
  next()
}

export default validateResult
