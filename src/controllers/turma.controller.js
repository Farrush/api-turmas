
import { selectTurmas, selectTurmasById, insertTurma, deleteTurma, updateTurma, selectTurmasFromAnoByCurso, selectTurmasFromAno } from "../repositories/turma.repository.js";
import validarTurma from "../validators/turma/validarTurma.js";
import validarNum from '../validators/turma/validarNumeros.js'
import validarCurso from "../validators/turma/validarCurso.js";
import { autenticar } from "../utils/jwt.js";
import { Router } from "express";
const endpoints = Router()

endpoints.get("/turma", autenticar, async (req, res)=> {
    try{
        const [turmas] = await selectTurmas()
        res.send(turmas)
    }catch(err){
        res.status(400).send({erro: err.message})
    }

})
endpoints.get("/turma/:id", autenticar, async (req, res)=> {
    try{
        let id = req.params.id
        const [turma] = await selectTurmasById(id)
        res.send(turma)
    }catch(err){
        res.status(400).send({erro: err.message})
    }

})
endpoints.get('/turma/busca', autenticar, async (req, res) => {
    try{
        if(!req.query.ano){
            throw new Error("Ano de busca não informado")
        }
        const ano = req.query.ano
        const [turmas] = await selectTurmasFromAno(ano)
        res.send(turmas)
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})
endpoints.get('/turma/:ano', autenticar, async (req, res) => {
    try{
        validarNum(req.params.ano)
        validarCurso(req.query.curso)
        const curso = req.query.curso
        const ano = req.params.ano
        const [turmas] = await selectTurmasFromAnoByCurso(ano, curso)
        res.send(turmas)
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})
endpoints.post('/turma', autenticar, async (req, res)=>{
    try{
        validarTurma(req.body)
        const novaTurma = req.body
        const [resultado] = await insertTurma(novaTurma)
        res.send({idInserido: resultado.insertId})
    }
    catch(err){
        res.status(400).send({erro: err.message})
    }
})
endpoints.put('/turma/:id', autenticar, async (req, res) => {
    try{
        validarTurma(req.body)
        validarNum(req.params.id)
        const turma = req.body
        const id = req.params.id
        await updateTurma(turma, id)
        res.send({id, ...turma})
    }catch(err){
        res.status(400).send({erro: err.message})
    }

})
endpoints.delete('/turma/:id', autenticar, async (req, res) => {
    try{
        validarNum(req.params.id)
        const id = req.params.id
        const [result] = await deleteTurma(id)
        res.send(result)
    }catch(err){
        res.status(400).send({erro: err.message})
    }

})


export default endpoints