const valor = "global"

function minhaFuncao(){
    console.log(valor) // carrega o contexto onde foi escrita // mostrando o global
}

function exec(){
    const valor = "Local"
    minhaFuncao()
}

exec() // mostra o contexto de onde foi definida