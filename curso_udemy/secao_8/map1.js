const nums = [1,2,3,4,5]

// for com proposito
// gera um novo array
let resultado = nums.map(function(e){
    return e*2
})

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".",",")}`

let resultado2 = nums.map(function(e){
    return e*2
}).map(soma10).map(triplo).map(paraDinheiro)


console.log(nums)
console.log(resultado)
console.log(resultado2)