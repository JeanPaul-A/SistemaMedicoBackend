import { comparePassword } from '../helpers/bcrypt.handler'
import { generateToken } from '../helpers/jwt.handler'
import Patient from '../models/patient.model'

const loginPatient = async (dni: string, password: string): Promise<any> => {
  try {
    const patients = await Patient.findOne({
      where: {
        dni
      }
    })
    if (await comparePassword(password, patients?.dataValues.password)) {
      const token = generateToken(dni)
      return {
        status: true,
        token
      }
    }
  } catch (error) {
    console.error('Error in login: ', error)
    return {
      status: false
    }
  }
}

export { loginPatient }
