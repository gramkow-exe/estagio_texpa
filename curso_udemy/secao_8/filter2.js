Array.prototype.filter2 = function (f) {
    const newList = []
    for (let index = 0; index < this.length; index++) {
        if(f(this[index], index, this)){newList.push(this[index])}        
    }
    return newList
}

const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "ipad", preco: 2999, fragil: true},
    {nome: "copodevrido", preco: 3, fragil: true},
    {nome: "platicsomething", preco: 1, fragil: false}
]

console.log(produtos.filter2(function(e){
    return e.fragil && e.preco > 2000
}))

const caro = produto => produto.preco>500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))
