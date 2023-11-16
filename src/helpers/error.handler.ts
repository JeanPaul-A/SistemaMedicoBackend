import { Response } from 'express'
import { isErrorBasic } from './type.checkers'
import { ResponseError } from '../interfaces/error.interface'

const errorHandler = (res: Response, error: ResponseError | string): void => {
  if (isErrorBasic(error)) {
    res.status(error.httpCode).send({
      message: error.message
    })
  } else {
    if (typeof error === 'string') {
      res.send({
        message: error
      })
    }
  }
}

export default errorHandler
