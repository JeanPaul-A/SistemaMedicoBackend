import dbConnection from '../helpers/dbConnection'
import { Patient } from '../interfaces/patient.interface'

const getPatients = (): any => {
  return new Promise((resolve, reject) => {
    const GET_PATIENTS = 'SELECT * FROM patients'
    dbConnection.query(GET_PATIENTS, (error: any, result) => {
      if (error != null) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}

const postPatient = (patient: Patient): any => {
  return new Promise((resolve, reject) => {
    const POST_PATIENTS = 'INSERT INTO patients VALUES (?,?,?,?,?,?)'
    dbConnection.query(POST_PATIENTS, [null, patient.name, patient.surname, patient.email, patient.password, patient.phone], (error, _result) => {
      if (error != null) {
        reject(error)
      } else {
        resolve('Patient created in dataDbase')
      }
    })
  })
}

const putPatient = (id: string, patient: Patient): any => {
  return new Promise((resolve, reject) => {
    const PUT_PATIENTS = 'UPDATE patients SET email=?, phone=? WHERE id=?'
    dbConnection.query(PUT_PATIENTS, [patient.email, patient.phone, id], (error, _result) => {
      if (error != null) {
        reject(error)
      } else {
        resolve({
          message: 'Patient updated in database',
          updatedPatient: patient
        })
      }
    })
  })
}

const deletePatient = (id: string): any => {
  return new Promise((resolve, reject) => {
    const DELETE_PATIENTS = 'DELETE FROM patients WHERE id=?'
    dbConnection.query(DELETE_PATIENTS, [id], (error, result) => {
      if (error != null) {
        reject(error)
      } else {
        resolve(`Patient with id ${id} deleted from database : ${+result}`)
      }
    })
  })
}

export { getPatients, postPatient, putPatient, deletePatient }
