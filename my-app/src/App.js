import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import RecuperacaoSenha from "./components/RecuperacaoSenha";
import Menu from "./components/Menu";
import Gastos from "./scenes/dashboard/Gastos";
import { GastosProvider } from './scenes/dashboard/GastosContext';
import User from "./components/User";


function App() {
  return (
    <GastosProvider>
    <Router>

      <Routes>
        {/* Define a rota para a página de login */}
        <Route path="/" element={<Login />} />
        {/* Define a rota para a página de cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/RecuperacaoSenha" element={<RecuperacaoSenha />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path = "/Gastos" element = {<Gastos />}/>
        <Route path= "/User" element = {<User />} />
      
        

      </Routes>
    </Router>
    </GastosProvider>
  );
}

export default App;
