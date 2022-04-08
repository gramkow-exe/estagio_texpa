// String Array e Object...Todos sao funções

String.prototype.reverse = function (){
    return this.split("").reverse().join("")
}


console.log("Escola Coder".reverse())

Array.prototype.first = function(){
    return this[0]
}

// Nao alterar funções que ja existam