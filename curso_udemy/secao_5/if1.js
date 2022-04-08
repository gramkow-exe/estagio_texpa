function soBoaNota(nota){
    if(nota >= 7){
        console.log(nota)
    }
}
soBoaNota(7)

function faloSeVerdade(valor) {
    if (valor) {
        console.log("É verdade..."+valor)
    }
}

faloSeVerdade()
faloSeVerdade(null)
faloSeVerdade(undefined)
faloSeVerdade(NaN)
faloSeVerdade("")
faloSeVerdade(0)
faloSeVerdade(-1)
faloSeVerdade(" ")
faloSeVerdade("?")
faloSeVerdade([])
faloSeVerdade([1,2])
faloSeVerdade({})