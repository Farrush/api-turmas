import { Router } from "express";
import turmasController from "../controllers/turma.controller.js";
import loginController from "../controllers/login.controller.js"

export default function adicionarRotas(server){
    server.use(turmasController)
    server.use(loginController)
}