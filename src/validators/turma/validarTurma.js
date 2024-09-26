
export default function validarTurma(turma){
    if(!turma.nome) throw new Error("Turma com valores Não inseridos")
    if(turma.descricao === undefined) throw new Error("Turma com valores Não inseridos")
    if(!turma.anoLetivo) throw new Error("Turma com valores Não inseridos")
    if(turma.ativo == undefined) throw new Error("Turma com valores Não inseridos")
    if(!turma.capacidade) throw new Error("Turma com valores Não inseridos")
    if(!turma.dataCriacao) throw new Error("Turma com valores Não inseridos")
}