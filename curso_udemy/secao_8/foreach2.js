const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]

Array.prototype.forEach2 = function (f){
    for (let index = 0; index < this.length; index++) {
        f(this[index], index, this)
    }
}


pilotos.forEach2(function(nome, indice, array){
    console.log(`${indice+1}: ${nome}`)
    console.log(array)
})

