const alunos = [
    {nome : "João", nota: 7.9},
    {nome : "Maria", nota: 7.9}
]

//Imperativo //ensina exatamente os passos
let total1 = 0
for (let index = 0; index < alunos.length; index++) {
    total1 += alunos[index].nota
    
}
//se importa mais com //como//
console.log(total1/alunos.length)

//Declarativo //diz o q tem q ser feito//é feito internamente
const getNota = aluno => aluno.nota
const soma = (total, atual)=> total+atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)
//se importa mais com //oque//