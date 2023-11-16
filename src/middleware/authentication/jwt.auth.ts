import 'dotenv/config'
import { NextFunction, Response } from 'express'
import { verifyToken } from '../../helpers/jwt.handler'
import { JwtPayload } from 'jsonwebtoken'
import { isJwtPayload } from '../../helpers/type.checkers'
import { RequestUser } from '../../interfaces/request.interface'

const authenticationService = (req: RequestUser, res: Response, next: NextFunction): JwtPayload | string | undefined | any => {
  try {
    const jwt = req.headers.authorization?.split(' ').pop() ?? ''
    const validUser = verifyToken(`${jwt}`)
    console.log(validUser)
    if (isJwtPayload(validUser)) {
      req.user = validUser
      next()
    } else {
      throw Error('asd')
    }
  } catch (error) {
    res.status(401)
    res.send({
      message: 'Invalid session'
    })
  }
}

export default authenticationService
