import { Request, Response } from 'express'
import errorHandler from '../helpers/error.handler'
import * as LoginService from '../services/auth.service'

const loginPatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await LoginService.loginPatient(req.body.dni, req.body.password)

    if (result.status !== false) {
      res.send({
        message: 'Welcome patient',
        token: result.token
      })
    } else {
      errorHandler(res, 'Dni or password invalid')
    }
  } catch (error: any) {
    res.send(error)
  }
}

export { loginPatient }
