function inteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = inteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1) // unica estrutura q a logica vem depois