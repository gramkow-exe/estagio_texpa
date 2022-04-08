const pessoa = {
    nome: "Rebeca",
    idade: 20
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.defineProperty(pessoa, "dataNascimento",{
    enumerable: true,
    writable: false,
    value: "01/01/2000"
})

//Object.assign
const dest = {a:1}
const o1 = {
    b:2
}
const o2 = {
    c:3,
    c:4
}
const obj = Object.assign(dest,o1,o2) //Concatena os atributos