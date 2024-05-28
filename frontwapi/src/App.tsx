import React from "react";
import ProdutoListar from "./components/pages/produto/produto-listar";
import Cep from "./components/pages/cep/consulta-cep";
import ProdutoCadastrar from "./components/pages/produto/produto-cadastrar";

function App() {
  return (
    <div className="App">
      {/* <ProdutoListar></ProdutoListar> */}
      {/* <Cep></Cep> */}
      <ProdutoCadastrar></ProdutoCadastrar>
    </div>
  );
}

export default App;
