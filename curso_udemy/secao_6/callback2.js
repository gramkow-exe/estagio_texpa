const notas = [7.7, 8.9, 9.1, 6.9]

// sem callback

let notasBaixas = []
for(let i in notas){
    if (notas[i]< 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

notasBaixas = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas)

notasBaixas = notas.filter(nota => nota < 7)

console.log(notasBaixas)
