function tratarErroELancar(erro){
    throw 10
    //pode throw numero, texto, bool, obj...
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("final") // sempre executado
    }
}
const obj = { name: "Pedro"}
imprimirNomeGritado(obj)