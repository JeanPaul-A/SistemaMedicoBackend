import { ErrorBasic } from '../types/types'

export function isErrorBasic (obj: any): obj is ErrorBasic {
  return (Boolean(obj)) && typeof obj.message === 'string' && typeof obj.httpCode === 'number'
}
