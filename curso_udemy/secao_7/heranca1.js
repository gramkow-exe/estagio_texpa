// caso escolher entre herança e composição, priorizar composição

const ferrari = {
    modelo: "f40",
    velMax: 345
}

const volvo = {
    modelo: "v40",
    velMax: 240
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
//prototype ta apenas dentro de funções
//objeto usa __proto__

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)