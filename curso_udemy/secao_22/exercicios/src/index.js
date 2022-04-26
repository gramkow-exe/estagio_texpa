import React from "react"
import  ReactDOM  from "react-dom"
import Primeiro from "./components/Primeiro"
import BomDia from "./components/BomDia"
import { BoaTarde, BoaNoite } from "./components/Multiplos"
import Saudacao from "./components/Saudacao"
import Pai from "./components/Pai"
import Filho from "./components/Filho"

const elem = <h1>React 1</h1>
ReactDOM.render(<div>
    <BoaNoite nome="doglas"/>
    <BomDia name="moles"/>
    <BoaTarde name="igao"></BoaTarde>
    <Primeiro></Primeiro>
    <Saudacao tipo="Bom dia" nome="Joao"></Saudacao>
    <Pai nome="DOglas" sobrenome="SIlva">
        <Filho nome="Pedro"/>
        <Filho nome="Paulo" />
        <Filho nome="Carla"/>
    </Pai>
</div> , document.getElementById("root"))