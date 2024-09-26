import { Router } from "express";
import turmasController from "../controllers/turma.controller.js";


export default function adicionarRotas(server){
    server.use(turmasController)
}