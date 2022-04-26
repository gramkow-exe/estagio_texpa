import React from "react";

export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>
export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

export default BoaNoite
// ou {BoaNoite, BoaTarde}
// importa um objeto com as funcoes ou as duas separadamente