import { ResponseError } from '../interfaces/error.interface'

export function isErrorBasic (obj: any): obj is ResponseError {
  return (Boolean(obj)) && typeof obj.message === 'string' && typeof obj.httpCode === 'number'
}

export function isJwtPayload (jwt: object | string): boolean {
  if (typeof jwt === 'object' &&
  jwt !== null &&
  'dni' in jwt &&
  'iat' in jwt &&
  'exp' in jwt) {
    return true
  } else {
    return false
  }
}
