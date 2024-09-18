import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import RecuperacaoSenha from "./components/RecuperacaoSenha";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define a rota para a página de login */}
        <Route path="/" element={<Login />} />
        {/* Define a rota para a página de cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/RecuperacaoSenha" element={<RecuperacaoSenha />} />
    

      </Routes>
    </Router>
  );
}

export default App;
