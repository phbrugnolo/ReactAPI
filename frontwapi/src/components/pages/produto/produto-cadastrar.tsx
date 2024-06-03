import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";

function ProdutoCadastrar() {
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  function cadastrarProduto(e : any) {
    e.preventDefault();
    const produto = {
      nome: nome,
      descricao: descricao,
      preco: parseFloat(preco),
      quantidade: parseInt(quantidade),
    };
    fetch("http://localhost:5181/api/produtos/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    })
      .then((resposta) => resposta.json())
      .then((produto) => {
        console.log(produto);
      });
  }
  return (
    <div>
      <h1>Criar Produto</h1>
      <form onSubmit={cadastrarProduto}>
        <label>
          Nome:
          <input type="text" onChange={(e : any) => setNome(e.target.value)} required/>
          <br />
        </label>
        <label>
          Descrição:
          <input type="text" onChange={(e : any) => setDescricao(e.target.value)} required/>
          <br />
        </label>
        <label>
          Preço:
          <input type="text" onChange={(e : any) => setPreco(e.target.value)} required/>
          <br />
        </label>
        <label>
          Quantidade:
          <input type="text" onChange={(e : any) => setQuantidade(e.target.value)} required/>
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default ProdutoCadastrar;
