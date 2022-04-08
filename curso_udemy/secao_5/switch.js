const imprimirResultado =  function (nota) {
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log("10,9")
            break //precisa pois no js todos abaixo do q entrou tbm sao exec
        case 8: case 7:
            console.log("8,7")
            break
        case 6: case 5:
            console.log("6,5")
            break
        case 4:
        case 3:
            console.log("4,3")
            break
        case 2:
            console.log("2")
            break
        case 1: case 0:
            console.log("1,0")
            break
        default:
            console.log("nota invalidid")
            
    }
    
}
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(4)
imprimirResultado(2)
imprimirResultado(0)
imprimirResultado(12)

