import { Request, Response } from 'express'
import errorHandler from '../helpers/error.handler'
import { IPatient, IPatientUpdate } from '../interfaces/patient.interface'
import * as PatientService from '../services/patients.service'

const getPatients = async (_req: Request, res: Response): Promise<void> => {
  try {
    const patients = await PatientService.getPatients()
    res.send(patients)
  } catch (error) {
    errorHandler(res, 'Error get patients')
  }
}

const getPatientByDni = async (req: Request, res: Response): Promise<any> => {
  try {
    const patient = await PatientService.getPatientByDni(req.params.dni)
    if (typeof patient === 'string') {
      errorHandler(res, patient)
    }
    res.send(patient)
  } catch (error) {
    errorHandler(res, 'Error get a patient by dni')
  }
}

const postPatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await PatientService.postPatient(req.body as IPatient)
    res.send(result)
  } catch (error) {
    errorHandler(res, 'Error post a patient')
  }
}

const putPatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await PatientService.putPatient(req.params.dni, req.body as IPatientUpdate)
    if (result === true) {
      res.send({
        message: `Patient with dni ${req.params.dni} has been updated`
      })
    } else {
      res.send({
        message: `Error updating patient with dni ${req.params.dni}`
      })
    }
  } catch (error) {
    errorHandler(res, 'Error put a patient')
  }
}
const deletePatient = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await PatientService.deletePatient(req.params.dni)
    if (result === true) {
      res.send({
        message: `Patient with dni ${req.params.dni} has been deleted`
      })
    } else {
      res.send({
        message: `Error deleting patient with dni ${req.params.dni}`
      })
    }
  } catch (error) {
    errorHandler(res, 'Error delete a patient')
  }
}

export { getPatients, getPatientByDni, postPatient, putPatient, deletePatient }
