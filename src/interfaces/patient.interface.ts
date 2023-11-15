export interface IPatient {
  'dni': string
  'name': string
  'surname': string
  'email': string
  'password': string
  'phone': number
}

export type IPatientLogin = Pick<IPatient, 'dni' | 'password'>

export type IPatientUpdate = Pick<IPatient, 'dni' | 'email' | 'phone'>
