// import mysql from 'mysql2'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('sistema_medico', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
})

export default sequelize
