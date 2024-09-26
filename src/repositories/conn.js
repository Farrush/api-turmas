import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const con = await mysql.createConnection(
    {
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.DB_USER,
        port: process.env.MYSQL_PORT,
        password: process.env.DB_PWD,
        typeCast: function (field, next) {
            if (field.type === 'TINY' && field.length === 1) {
              return field.string() === "1"; 
            }
            if (field.type.includes ('DECIMAL')) {
              return Number(field.string()); 
            }
            return next(); 
        }
    }
)

export default con