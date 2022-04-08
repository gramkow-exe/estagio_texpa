const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 30.45}',
    '{"nome": "kit", "preco": 323.45}',
    '{"nome": "Caneta", "preco": 2.45}'
]

Array.prototype.map2 = function(callback){
    let novaLista = []
    for (let index = 0; index < this.length; index++) {
        novaLista.push(callback(this[index], i, this))  
    }
    return novaLista
}

//Retornar um array apenas com os precos

console.log(carrinho.map2(function(e){return JSON.parse(e)}).map2(function(e){return e.preco}))