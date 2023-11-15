// import { Request, Response } from 'express'
// import { loginPatientS } from '../services/auth.services'
// import { PatientLogin } from '../interfaces/patient.interface'
// import errorHandler from '../helpers/error.handler'
// import { isErrorBasic } from '../helpers/type.checkers'
// const loginPatientC = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const result = await loginPatientS(req.body as PatientLogin)

//     if (isErrorBasic(result)) {
//       errorHandler(res, result)
//     } else {
//       res.send({
//         result,
//         message: 'Resultado exitoso'
//       })
//     }
//   } catch (error: any) {
//     console.log(error)
//     res.send(error)
//   }
// }

// export { loginPatientC }
