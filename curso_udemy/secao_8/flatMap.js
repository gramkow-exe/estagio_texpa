const escola = [{
    nome: "Turma M1",
    alunos: [{
        nome: "Gustavo",
        nota: 8.1
    },{
        nome: "Ana",
        nota: 9.3
    }]
}, {
    nome: "Turma M2",
    alunos: [{
        nome: "DOuglas",
        nota: 8.4
    },{
        nome: "lari",
        nota: 9.9
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2)
