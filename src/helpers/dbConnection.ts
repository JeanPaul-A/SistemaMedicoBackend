import mysql from 'mysql2'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class DatabaseConnection {
  private static instance: mysql.Connection | null = null

  private constructor () { }

  static getInstance (): mysql.Connection {
    if (DatabaseConnection.instance == null) {
      DatabaseConnection.instance = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'sistemamedico'
      })
      DatabaseConnection.instance.connect((err: Error | null) => {
        if (err != null) {
          console.log('Database not connected')
        } else {
          console.log('Database connected')
        }
      })
    }
    return DatabaseConnection.instance
  }
}
const dbConnection = DatabaseConnection.getInstance()

export default dbConnection
