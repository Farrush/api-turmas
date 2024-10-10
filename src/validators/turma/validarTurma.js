
export default function validarTurma(turma){
    if(!turma.nome) throw new Error("Turma com o campo nome não inserido")
    if(!turma.anoLetivo) throw new Error("Turma com o campo ano letivo não inserido")
    if(turma.ativo == undefined) throw new Error("Turma com o campo ativo indefinido não inserido")
    if(!turma.capacidade) throw new Error("Turma com o campo capacidade não inserido")
    if(!turma.dataCriacao) throw new Error("Turma com o campo data de criação não inserido")
}