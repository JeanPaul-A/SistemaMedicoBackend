import { Request, Response } from 'express'
import { deletePatient, getPatients, postPatient, putPatient } from '../services/patients.services'
import { Patient } from '../interfaces/patient.interface'
import errorHandler from '../helpers/errorHandler'

const getObjects = async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await getPatients()
    res.send({
      result,
      message: 'Resultado exitoso'
    })
  } catch (error) {
    errorHandler(res, 'Error get all patients')
  }
}

const postObject = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await postPatient(req.body as Patient)
    res.send(result)
  } catch (error) {
    errorHandler(res, 'Error post a patient')
  }
}

const putObject = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await putPatient(req.params.id, req.body as Patient)
    res.send(result)
  } catch (error) {
    errorHandler(res, 'Error put a patient')
  }
}

const deleteObject = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await deletePatient(req.params.id)
    res.send(result)
  } catch (error) {
    errorHandler(res, 'Error delete object')
  }
}

export { getObjects, postObject, putObject, deleteObject }
