import { gerarToken } from '../utils/jwt.js';
import loginService from '../services/login.service.js';
import signinService from '../services/signin.service.js';

import { Router } from 'express';
const endpoints = Router();


endpoints.post('/login', async (req, resp) => {
    try {    
        let credenciais = req.body;

        let info = await loginService(credenciais);

        let token = gerarToken(info)

        resp.send({ token });
            
    } catch (err) {
        resp.status(401).send({ erro: err.message });
    }
})
endpoints.post('/cadastrar', async (req, res) => {
    try{
        const credenciais = req.body
        const result = await signinService(credenciais)
        res.status(204).send({idNovo: result.insertId})
    }catch(err){
        if(err.message.includes("Duplicate"))
            res.status(409).send({ erro: "Email já cadastrado"}); 
        else
            res.status(400).send({ erro: err.message}); 
        
    }
})




export default endpoints;