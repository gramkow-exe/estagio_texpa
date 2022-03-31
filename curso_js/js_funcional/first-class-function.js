const add = function(a,b){
    return a + b
}

const subtract = function(a,b){
    return a - b
}

const multiply = (x,y) => x * y

const division = (x,y) => x / y

// Cidadao de primeira linha - Alta importancia - é tratada como outras variaveis


// Higher order function
function run (fn){
    fn()
}

function sayHello(){
    console.log("Hello!")
}

run(sayHello) // sem () passa função, com passa o retorno da mesma

run(() => {
    console.log("Hello!")
})


// Curring

function finalPrice(tax){
    return function(price){
        return price * (1 + tax)
    }
        
}

var scFinalPrice =  finalPrice(0.075)

console.log(`Price is : ${finalPrice(0.0875)(25)}`)
console.log(`Price is : ${scFinalPrice(25)}`)


// Map function - Para transformações
// Transforma arrays com uma função de parametro


const numbers = [1, 2, 3, 4, 5, 6, 7]

const students = [
    {name : "Jake", score: 6.4},
    {name : "Susan", score: 8.6},
    {name : "Emma", score: 9.4},
    {name : "Petter", score: 9.1},
]

const numbersV2 = numbers.map(function(el){
    return el * 2
})

console.log(numbersV2)

const getScore = el => el.score

console.log(
    students
        .map(getScore) // duas funções uma pega o resultado da outra
        .map(Math.ceil) // mostra só 1 na tela // ultima
)


// Filter Function
// Filtra elementos com uma função que retorna um booleano

const graterThanTwo = el => el > 2
const even = el => el % 2 === 0
const greatStudents = student => student.score > 9

console.log(numbers.filter(graterThanTwo), numbers.filter(even), students.filter(greatStudents))


//Reduce Function
const total = numbers.reduce(function(total, el){
    return total + el
})
console.log(total, 100)//1º func 2º valor inicial

const media = (function(total, el, i, array){
    retorno = i === array.length-1 ? (total + el) / array.length : total + el
    return retorno 
})



// map filter reduce

console.log(
    students
        .filter(greatStudents)
        .map(getScore)
        .reduce(media)

)
