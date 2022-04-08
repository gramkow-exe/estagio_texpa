const carrinho = [
    {nome: "Borracha", preco: 3.45},
    {nome: "Caderno", preco: 30.45},
    {nome: "kit", preco: 323.45},
    {nome: "Caneta", preco: 2.45}
]

const resultado = carrinho.map(a => a.preco).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)
console.log(resultado)