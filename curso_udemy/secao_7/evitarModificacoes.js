// Object.preventExtensions
//prevem aumentar qtde de atributos
//voce pode excluir

const prod = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99
})
console.log(Object.isExtensible(prod))

//Object.seal
//Nao consegue adicionar nem deletar atributos, mas modifica
const pessoa = {nome: "Juliana", idade: 35}
Object.seal(pessoa)
console.log(Object.isSealed(pessoa))

//Object.freeze = selado + valores constantes