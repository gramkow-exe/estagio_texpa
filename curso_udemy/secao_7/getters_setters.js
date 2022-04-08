const sequencia = {
    _valor: 1, //convenção //so usada internamente //não é privada
    get valor(){
        return this._valor++    
    },
    set valor(valor){
        if (valor>this._valor){
            this._valor = valor
        }
        
    }
}

console.log(sequencia.valor, sequencia.valor) //get
sequencia.valor = 900 //set