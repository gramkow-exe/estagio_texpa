const escola = "Coder"

console.log(escola.charAt(4)) //mostra o caracter de indice 4
// nao retorna erro caso nao ache o indice

console.log(escola.charCodeAt(3)) // valor da tabela unicode

console.log(escola.indexOf("3"))// mostra onde ta o valor 3 se tiver na str

console.log(escola.substring(0,3)) //mostra parte da string

console.log("Escola".concat(escola).concat("!")) //concatenação

console.log(escola.replace(3, "e")) // /\d/ : digitos /\w/ : letras e digitos g : global (adicionar ao final)

console.log("ana,maria,pedro".split(",")) // cria array separando a str /,/

console.log("3" + 2) // concatena
console.log("3" - 2) // diminui numero