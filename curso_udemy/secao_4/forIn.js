const notas = [6.7,9.6,8.4]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64

}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}