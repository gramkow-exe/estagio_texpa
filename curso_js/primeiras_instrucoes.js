// variaveis
// cria-se com var let e const
var a = 1
let b = 2
const c = a + b //não muda

// int mais str concatena
// nomenclatura adequada importante
// sem tipagem específica

//mostrar no terminal
//console.log()

// operadores

    // unarios

    let e = 3
    e++ //postfix
    ++e //prefix

    // binarios
        //aritmeticos, relacionais, atribuição e logicos
        
        //atribuição
        let f = 557 
        f += 30
        f *= 5
        f = 20

        //relacionais
        // > < >= <= != == === Retornam sempre booleanos
        // === ou !=== igualdade ou diferença estrita (tipos iguais)

        //inverte a logica com ! (bool)
        //(!(1 > 2)) -> True
        //(!! ou !)
    
        //aritmetico
        let g = a % b //infix
        
        // + - / * // %

        //logico

        let temSol = true
        let tenhoDinheiro = true
        let vouSair = temSol && tenhoDinheiro //necessita de todos verdadeiros
        //vouSair = temSol || tenhoDinheiro //necessita de um verdadeiro

        //prioridade () / *

    // ternario
        let resposta = vouSair ? "Ebaaa" : "Que Chato!" //? se for true  e : se for false
        

// estruturas de controle
    //if = se
    if (vouSair){
        console.log("Vai sair")
    }else if (tenhoDinheiro){
        console.log("dinheiro")
    }else{
        console.log("Fica em casa")
    }

    //for = laço de repetição
    for(let i = 0; i < 5; i++){ //i = valor inicial; enquanto for verdadeiro; aumenta o valor de i para q n seja infinito
        //pode ser +=
        //bloco de comandos
    }

    // Array -> index começa no 0
        const notas = [10, 8, 9]

        //1º forma
        for(let i = 0; i< notas.length; i++){
            //usa o tamanho do array
            //printar item do array notas[index]
            //console.log(notas[i]) mostra todos os elementos devido ao numero de i sempre atualizar
        }

        //2º forma
        for(let nota of notas){
            //passa por todas sem se preocupar com variavel
        }

        //3º forma
        notas.forEach(nota => console.log(nota * 2))//nota == i

    //
// função
        function soma(a,b) { //delcaração: function declaration //soma(a,b=0): valor padrão
           
            return a+ (b || 2) //caso o segundo numero seja NaN (não passado) soma-se a 2 (0 tbm entra)
        }
        const func_expr = function(a,b){  // function expression // dentro da variavel
            return a + b
        }
        console.log(func_expr(3,6))

        soma(2, 3) //chamada
        //desconsidera valores a mais

        function executar(fn){ //passando função para função
            if (typeof fn === "function"){
                return fn(4, 50) //retorna um valor da função ao local onde foi chamada
            }
        }
        console.log(executar(soma))


// objetos
    class Pessoa { // POO com classe
        constructor(nome, idade) { //função para construir, igual ao __init__ do python
            this.nome = nome
            this.idade = idade
                
        }
    }
    igor = new Pessoa("Igor", 16); 
    console.log(igor.nome)


    function Amigo(nome){ // POO com function
        this.nome = nome
    }

    igao = new Amigo("igao") 
    console.log(igao.nome)