const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]

pilotos.pop() //remove ultimo elemento
pilotos.push("Verstappen") //adiciona
pilotos.shift() //remove primeiro elemento
pilotos.unshift("Hamilton") //adiciona no primeiro index
pilotos.splice(2,0,"Bottas") //exclui(2º) e adiciona(3º) apartir de um index
pilotos.slice(2) //novo array a partir de um index //(2,4) tbm dá
