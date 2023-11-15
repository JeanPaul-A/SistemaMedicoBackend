import Patient from '../models/patient.model'

export interface Response {
  message: string
}

export interface ResponseError extends Response {
  httpCode: number
}

export interface ResponsePatient extends Response {
  Patient: Patient
}
