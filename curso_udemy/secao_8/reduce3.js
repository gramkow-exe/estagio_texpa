const carrinho = [
    {nome: "Borracha", preco: 3.45},
    {nome: "Caderno", preco: 30.45},
    {nome: "kit", preco: 323.45},
    {nome: "Caneta", preco: 260.45}
]

Array.prototype.reduce2 = function(f, inicial){
    const indiceInicial = inicial ? 0 : 1
    let acumulador = inicial || this[0]
    for (let index = indiceInicial; index < this.length; index++) {
        acumulador = f(acumulador, this[index], index, this)    
    }
    return acumulador
}

const resultado = carrinho.map(a => a.preco).reduce2(function(acumulador, atual){
    if (atual > 50){
        return acumulador + 1
    } else {
        return acumulador
    }
}, 0)

console.log(resultado === carrinho.length ? console.log("Todos são caros") : resultado > 0 ? console.log("Pelo menos um é") : console.log("nenhum é")) 