
// pessoa -> 123 -> {...}
const pessoa = {nome: "doglas"}
// pessoa -> 123 -> {...}
pessoa.nome = "pedro"
// pessoa -> 456 -> {...}
pessoa = {nome: "dozes"}

Object.freeze(pessoa)
// nao aceita mais modificações
const pessoa = Object.freeze({nome: "doglas"})