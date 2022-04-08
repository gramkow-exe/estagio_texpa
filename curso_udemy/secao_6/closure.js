// closure é o escopo criado quando uma função é definida
// esse escopo permite a função acessar e manipular as variaveis externas a função

const x = "global"

function fora(){
    const x = "Local"
    function dentro(){ // leva consigo a memoria de x local
        return x
    }
    return dentro
}

const minhaFuncao = fora()  // guarda a instrução de retornar o x local
console.log(minhaFuncao())