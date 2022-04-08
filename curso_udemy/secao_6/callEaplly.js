function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} `
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
global.desc = 0.1

//diretamente
console.log(getPreco())

//por funcao
console.log(produto.getPreco())


const carro = {
    preco: 49990,
    desc: 0.20
}

//call
console.log(getPreco.call(carro)) // passa o objeto de contexto pra função
console.log(getPreco.call(carro, 0.17, "$")) // passa o contexto de dps os params pra func

//apply
console.log(getPreco.apply(carro))
console.log(getPreco.apply(global, [0.17, "$"])) // passa dentro de um array