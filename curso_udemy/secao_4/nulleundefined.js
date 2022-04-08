//variaveis apontam um endereço em objs
const a ={name: "teste"}
const b = a

b.name = "opa" //muda tbm o valor de a
//valores primitivos nao mudam 

let valor //nao inicializada
console.log(valor) //undefined

valor = null
// nao tem valor nem endereço, porém definida

//cuidado, tentar acessar valores que podem estar nulos podem gerar erros

const produto = {}
console.log(produto.preco) // nao gera problema // se adicionasse um .a daria pois ta tentando acessar

//evitar atribuir undefined usar null no lugar

// podemos utilizar o delete em um atributo
delete produto.preco


