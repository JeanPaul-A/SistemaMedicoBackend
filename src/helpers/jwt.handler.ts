import { JwtPayload, sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET ?? 'asfasf'

const generateToken = (dni: string): string => {
  return sign({ dni }, JWT_SECRET, {
    expiresIn: 60 * 60
  })
}

const verifyToken = (jwt: string): string | JwtPayload => {
  return verify(jwt, JWT_SECRET)
}

export { generateToken, verifyToken }
