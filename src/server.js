import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import rotas from './routes/routes.js'
dotenv.config()

const server = express()
server.use(cors())
server.use(express.json())
rotas(server)


const port = process.env.PORT

server.listen(port, ()=> console.log("Api rodando na porta "+port))