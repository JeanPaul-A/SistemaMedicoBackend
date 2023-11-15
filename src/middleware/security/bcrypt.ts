import bcrypt from 'bcrypt'

async function hashPassword (password: string): Promise<string> {
  const saltRounds = 10
  return await bcrypt.hash(password, saltRounds)
}

async function comparePassword (inputPassword: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(inputPassword, hashedPassword)
}

export { hashPassword, comparePassword }
