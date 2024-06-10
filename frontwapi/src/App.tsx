import React from "react";
import ProdutoListar from "./components/pages/produto/produto-listar";
import Cep from "./components/pages/cep/consulta-cep";
import ProdutoCadastrar from "./components/pages/produto/produto-cadastrar";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produto/cadastrar">Cadastrar Produto</Link>

            </li>
            <li>
              <Link to="/produto/listar">Listar Produto</Link>
            </li>
            <li>
              <Link to="/cep/consultar">Consultar CEP</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProdutoListar/>}></Route>
          <Route path="/produto/cadastrar" element={<ProdutoCadastrar/>}></Route>
          <Route path="/produto/listar" element={<ProdutoListar/>}></Route>
          <Route path="/cep/consultar" element={<Cep/>}></Route>
        </Routes>
        <footer>
          <p>Desenvolvido por phbrugnolo &copy; 2024</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
