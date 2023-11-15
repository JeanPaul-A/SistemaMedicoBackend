import 'dotenv/config'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import errorHandler from '../../helpers/error.handler'

const jsonwebtoken = (_req: Request, res: Response, next: NextFunction): void => {
  if (process.env.JWT_KEY != null) {
    const token = jwt.sign(
      { user: 'user' },
      process.env.JWT_KEY,
      { expiresIn: 60 * 5 }
    )
    console.log(token)
  } else {
    errorHandler(res, 'El sistema no se encuentra disponible en estos momentos. Inténtelo más tarde.')
  }
}

export default jsonwebtoken
