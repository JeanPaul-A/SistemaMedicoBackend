import { Response } from 'express'
import { isErrorBasic } from './type.checkers'
import { ErrorBasic } from '../interfaces/error.interface'

const errorHandler = (res: Response, error: ErrorBasic | string): void => {
  if (isErrorBasic(error)) {
    res.status(error.httpCode).send(error.message)
  } else {
    if (typeof error === 'string') {
      res.send(error)
    }
  }
}

export default errorHandler
