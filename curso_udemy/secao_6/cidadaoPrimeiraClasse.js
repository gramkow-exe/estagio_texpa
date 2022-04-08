// explicando cidadao de primeira linha
// funções que podem ser passadas e guardadas em variaveis

//criar de forma literal
function fun1() {

}

//armazenar em variavel

const fun2 = function () {

}

//armazenar em um array

const array = [function(a,b){return a+b}, fun1, fun2]

// armazenar em atributo de obj

const obj = {

}

obj.falar = function(){ return "opa"}


// passar função como param

function run(fun){
    fun()
}

// uma função pode retornar /conter uma funcao

function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)