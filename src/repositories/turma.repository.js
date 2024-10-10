import con from "./conn.js";

export async function selectTurmas(){
    return await con.query("select id_turma id, nm_turma nome, ds_curso descricao, nr_ano_letivo anoLetivo, qtd_capacidade capacidade, bt_ativo ativo, dt_inclusao dataCriacao from tb_turma order by nr_ano_letivo")
}

export async function selectTurmasById(id){
    return await con.query("select id_turma id, nm_turma nome, ds_curso descricao, nr_ano_letivo anoLetivo, qtd_capacidade capacidade, bt_ativo ativo, dt_inclusao dataCriacao from tb_turma where id_turma = ? order by nr_ano_letivo", [id])
}

export async function insertTurma(turma){
    return await con.query("insert into tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao) values" +
    "(?, ?, ?, ?, ?, ?)", [turma.nome, turma.descricao, turma.anoLetivo, turma.capacidade, turma.ativo, turma.dataCriacao])
}
export async function updateTurma(turma, id){
    return await con.query("update tb_turma set nm_turma = ?, ds_curso = ?, nr_ano_letivo = ?, qtd_capacidade = ?, bt_ativo = ?, dt_inclusao = ? where id_turma = ?",
    [turma.nome, turma.descricao, turma.anoLetivo, turma.capacidade, turma.ativo, turma.dataCriacao, id])
}
export async function deleteTurma(id){
    return await con.query("delete from tb_turma where id_turma = ?", [id])
}

export async function selectTurmasFromAno(ano){
    console.log("ano: "+ano)
    return await con.query("select id_turma id, nm_turma nome, ds_curso descricao, nr_ano_letivo anoLetivo, qtd_capacidade capacidade, bt_ativo ativo, dt_inclusao dataCriacao from tb_turma where nr_ano_letivo = ?", [ano])
}

export async function selectTurmasFromAnoByCurso(ano, curso){
    console.log("ano: "+ano+ " curso: "+curso)
    return await con.query("select id_turma id, nm_turma nome, ds_curso descricao, nr_ano_letivo anoLetivo, qtd_capacidade capacidade, bt_ativo ativo, dt_inclusao dataCriacao from tb_turma where nr_ano_letivo = ? and nm_turma like ?", [ano, "%"+curso+"%"])
}

