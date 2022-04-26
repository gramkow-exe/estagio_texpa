import "bootstrap/dist/css/bootstrap.min.css"
// import "font-awesome/css/font-awesome.min.css"
import "./App.css"
import "@fortawesome/fontawesome-free/css/all.css"
import React from "react"
import Footer from "../components/template/Footer"
import Nav from "../components/template/Nav"
import Logo from "../components/template/Logo"
import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes"

export default props => 
<BrowserRouter>
    <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Routes></Routes>
        <Footer></Footer>
    </div>
</BrowserRouter>
    