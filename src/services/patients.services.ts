import { IPatient, IPatientUpdate } from '../interfaces/patient.interface'
import Patient from '../models/patient.model'

const getPatients = async (): Promise<Patient[]> => {
  try {
    const patients = await Patient.findAll()
    return patients
  } catch (error) {
    console.error(error)
    throw error
  }
}

const getPatientByDni = async (dni: string): Promise<Patient | string | undefined> => {
  try {
    const patient = await Patient.findByPk(dni)
    if (patient == null) {
      return `There´s not patient with dni: ${dni} in database`
    } else {
      return patient
    }
  } catch (error) {
    console.error(error)
  }
}

const postPatient = async (patient: IPatient): Promise<any> => {
  try {
    const newPatient = await Patient.create({
      dni: patient.dni,
      name: patient.name,
      surname: patient.surname,
      email: patient.email,
      password: patient.password,
      phone: patient.phone
    })
    return {
      message: 'Usuario creado exitosamente',
      newPatient
    }
  } catch (error) {
    console.error(error)
  }
}

const putPatient = async (dni: string, patient: IPatientUpdate): Promise<any> => {
  try {
    const updatedPatient = await Patient.update({
      email: patient.email,
      phone: patient.phone
    }, {
      where: {
        dni
      }
    })
    return updatedPatient.length === 1
  } catch (error) {
    console.error(error)
  }
}

const deletePatient = async (dni: string): Promise<any> => {
  try {
    const deletedPatient = await Patient.destroy({
      where: {
        dni
      }
    })
    return deletedPatient === 1
  } catch (error) {
    console.error(error)
  }
}
export { getPatients, getPatientByDni, postPatient, putPatient, deletePatient }
