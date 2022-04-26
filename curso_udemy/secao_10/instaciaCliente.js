const contadorA = require("./instanciaUnica")
const contadorB = require("./instanciaUnica")

const contadorC = require("./instanciaNova")()
const contadorD = require("./instanciaNova")() // retorna função

contadorA.inc()
console.log(contadorB)

contadorC.inc()
console.log(contadorD)
