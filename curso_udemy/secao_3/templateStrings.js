const nome = "Rebeca"
const concatenacao = "ola" + nome + "!"
const template = `
    Olá
    ${nome}!
    1 + 1
    ${1+1}
`
const up = texto => texto.toUpperCase()
console.log(`ei..${up("cuidado")}`)