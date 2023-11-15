// import { QueryError, RowDataPacket } from 'mysql2'
// import dbConnection from '../helpers/database.handler'
// import { PatientLogin } from '../interfaces/patient.interface'
// import { ErrorBasic } from '../interfaces/error.interface'

// const loginPatientS = (req: PatientLogin): any => {
//   return new Promise((resolve, reject) => {
//     const LOGIN_PATIENT = 'SELECT * FROM patients where dni=? AND password=?'
//     dbConnection.query(LOGIN_PATIENT, [req.dni, req.password], (error: QueryError | null, result: RowDataPacket[]) => {
//       if (error != null) {
//         reject(error)
//       } else {
//         if (result.length === 0) {
//           const errorBasic: ErrorBasic = {
//             message: 'Dni o contraseña inválida',
//             httpCode: 404
//           }
//           resolve(errorBasic)
//         } else {
//           resolve({
//             messge: 'Welcome patient',
//             result
//           })
//         }
//       }
//     })
//   })
// }

// export { loginPatientS }
