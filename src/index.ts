import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import initialRoutes from './routes/initial.routes'

// Startup server
const app = express()
app.use(cors())
app.use(express.json())

const PORT: number = process.env.PORT !== undefined ? +process.env.PORT : 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.use('/api', initialRoutes)
