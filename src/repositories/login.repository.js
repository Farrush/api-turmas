import con from "./conn.js";

export async function login(credenciais) {
    const comando = `
        select id_login     as id,
               ds_email     as email
          from tb_login
         where ds_email = ?
           and ds_senha = ?
    `

    const [registros] = await con.query(comando, [credenciais.email, credenciais.senha])
    return registros[0];
}

export async function signin(credenciais) {
    const comando = `
        insert into tb_login
        (ds_email, ds_senha)
        values
        (?, ?)
    `
    return await con.query(comando, [credenciais.email, credenciais.senha])
}