const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]

pilotos.forEach(function(nome, indice, array){
    console.log(`${indice+1}: ${nome}`)
    console.log(array)
})

pilotos.forEach(nome => {
    console.log(nome)
});

const exibir = piloto => console.log(piloto)
pilotos.forEach(exibir)