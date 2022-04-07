// forma de guardar multiplos valores em uma so estrutura
// array heterogeneo
//cresce e diminui

const valores = [7.7, 8.9, 9.2]
console.log(valores[0])

valores[2] = 10

valores[10] = 5 //cria valores vazios ate chegar ao indice

console.log(valores.length) //tamanho do array

valores.push({id: 3}, false, null, "teste") //adiciona valores ao array

console.log(valores.pop()) //retira o ultimo valor

delete valores[0] //deleta um valor do array

console.log(typeof valores) // retorna object