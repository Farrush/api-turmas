import { signin } from "../repositories/login.repository.js";


export default async function signinService(credenciais) {
    let cad = await signin(credenciais);
    if (cad == undefined) {
        throw new Error('Credenciais inválidas');
    }
    return cad
}
