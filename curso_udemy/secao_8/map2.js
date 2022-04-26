const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 30.45}',
    '{"nome": "kit", "preco": 323.45}',
    '{"nome": "Caneta", "preco": 2.45}'
]

//Retornar um array apenas com os precos

console.log(carrinho.map(function(e){return JSON.parse(e)}).map(e => e.preco))