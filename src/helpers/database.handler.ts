// import mysql from 'mysql2'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('sistema_medico', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
})

export default sequelize

// class DatabaseConnection {
//   private static instance: mysql.Connection | null = null

//   private constructor () { }

//   static getInstance (): mysql.Connection {
//     if (DatabaseConnection.instance == null) {
//       DatabaseConnection.instance = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: process.env.DB_PASSWORD,
//         database: 'sistemamedico'
//       })
//       DatabaseConnection.instance.connect((err: Error | null) => {
//         if (err != null) {
//           console.log('Database not connected')
//         } else {
//           console.log('Database connected')
//         }
//       })
//     }
//     return DatabaseConnection.instance
//   }
// }
// const dbConnection = DatabaseConnection.getInstance()

// export default dbConnection
