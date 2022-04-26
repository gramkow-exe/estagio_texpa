// Uma factory retorna um novo objet

module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}