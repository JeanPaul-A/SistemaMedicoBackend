import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import initialRoutes from './routes/initial.routes'
import sequelize from './helpers/database.handler'

// Startup server
const app = express()
app.use(cors())
app.use(express.json())

const PORT: number = process.env.PORT !== undefined ? +process.env.PORT : 3001

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`)
  await sequelize
    .authenticate()
    .then(() => {
      console.log('Conexión exitosa a la base de datos')
    })
})

app.use('/api', initialRoutes)
