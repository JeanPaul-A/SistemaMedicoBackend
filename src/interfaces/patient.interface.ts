export interface Patient {
  'dni': string
  'name': string
  'surname': string
  'email': string
  'password': string
  'phone': number
}

export type PatientLogin = Pick<Patient, 'dni' | 'password'>
