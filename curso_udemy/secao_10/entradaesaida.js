const anonimo = process.argv.indexOf("-a") !== -1 //booleano

if (anonimo){
    process.stdout.write("Fala Anonimo!\n")
    process.exit()
}else{
    process.stdout.write("Informe o seu nome: ")
    process.stdin.on("data", data => {
        const nome = data.toString().replace("", "")
        process.stdout.write(`Faaaaaaaaaala ${nome}!!`)
        process.exit()
    })
}