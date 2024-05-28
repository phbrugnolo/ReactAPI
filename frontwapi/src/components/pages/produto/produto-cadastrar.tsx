import { useEffect, useState } from "react";

function ProdutoCadastrar() {


    useEffect(() => {
        console.log("carreguei meu componente");
        cadastrarProduto();
    }, []);

    function cadastrarProduto() {
        const produto = {
            nome: "Produto 1",
            descricao: "Descrição do Produto 1",
            preco: 10,
            quantidade: 10
        };
        fetch("http://localhost:5181/api/produtos/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(produto)
        })
        .then((resposta) => resposta.json())
        .then(produto => {
            console.log(produto);
        });
    }
  return (
    <div>
      <h1>Criar Produto</h1>
        <input type="button" value="Cadastrar" onClick={cadastrarProduto}/>
    </div>
  );
}

export default ProdutoCadastrar;
