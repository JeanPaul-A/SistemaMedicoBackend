import { ResponseError } from '../interfaces/error.interface'

export function isErrorBasic (obj: any): obj is ResponseError {
  return (Boolean(obj)) && typeof obj.message === 'string' && typeof obj.httpCode === 'number'
}
