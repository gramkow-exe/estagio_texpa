//literal
const obj1 = {}

//object em js

const obj2 = new Object

// func construtoras
function produto(nome,preco){
    this.nome = nome
    this.getPreco = () => {
        return preco
    }
}

p1 = new produto("Caneta", 7.99)
p2 = new produto("Caneta mole", 7.99)

// func factory

function criarFuncionario(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return(salario/30)* (30-faltas)
        }
    }
}
const f1 = criarFuncionario("maria", 5000, 2)
console.log(f1.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = "Ana"

//Uma func famosa q retorna obj
const fromJSON = JSON.parse('{"info": "sou um json"}')