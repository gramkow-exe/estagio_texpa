console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array("Bia", "Carlos", "Ana")

aprovados = ["Bia", "Carlos", "Ana"]

console.log(aprovados[1])
console.log(aprovados[1000])

aprovados[3] = "Paulo"

aprovados.push("Abia")
aprovados[9] = "Paulo"
console.log(aprovados)
aprovados.sort() //alfabetica
console.log(aprovados.length)
console.log(aprovados)

delete aprovados[1] //troca por undefined

aprovados.splice(1, 2, "Elemento1", "Elemento2") //1º: o indice apartir, 2º: quantos elementos, outros: adiciona elementos
