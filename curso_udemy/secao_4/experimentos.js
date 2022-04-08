let a = 3

global.b = 123

this.c = 456
this.d = false

console.log(a)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)


// criando variavel maluca: sem var e let
abc = 3 // nao faça, cria direto no window
console.log(global.abc)

//executar o js em runtimes diferentes mudam o decorrimento do programa
//no navegador
//var cria direto no window e outros podem alterar //let e const nao
//functions nomeadas também ficam no window // arrow funcs não

