import { login } from "../repositories/login.repository.js";


export default async function loginService(credenciais) {
    let info = await login(credenciais);
    if (info == undefined) {
        throw new Error('Credenciais inválidas');
    }

    return info;
}
