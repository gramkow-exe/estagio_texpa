const carrinho = [
    {nome: "Borracha", preco: 3.45},
    {nome: "Caderno", preco: 30.45},
    {nome: "kit", preco: 323.45},
    {nome: "Caneta", preco: 260.45}
]

const resultado = carrinho.map(a => a.preco).reduce(function(acumulador, atual){
    if (atual > 50){
        return acumulador + 1
    } else {
        return acumulador
    }
}, 0)

console.log(resultado === carrinho.length ? console.log("Todos são caros") : resultado > 0 ? console.log("Pelo menos um é") : console.log("nenhum é")) 